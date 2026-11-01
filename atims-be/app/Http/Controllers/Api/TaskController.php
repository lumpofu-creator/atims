<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\TaskQueue;
use App\Models\Asset;
use App\Models\Inspection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class TaskController extends Controller
{
    #[OA\Post(
        path: '/api/tasks/assign',
        summary: 'Assign task to Field Agent',
        description: 'Assign an incident to a Field Agent for resolution',
        tags: ['Tasks'],
        security: [['bearerAuth' => []]],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['asset_id', 'assigned_user_id'],
                properties: [
                    new OA\Property(property: 'asset_id', type: 'integer', example: 1),
                    new OA\Property(property: 'assigned_user_id', type: 'integer', example: 2),
                    new OA\Property(property: 'priority', type: 'string', enum: ['Low', 'Medium', 'High'], example: 'High'),
                    new OA\Property(property: 'due_date', type: 'string', format: 'date', example: '2024-01-20'),
                    new OA\Property(property: 'assigned_by_user_id', type: 'integer', example: 1),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 201,
                description: 'Task assigned successfully'
            ),
            new OA\Response(
                response: 404,
                description: 'Asset or user not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function assign(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'asset_id' => 'required|integer|exists:assets,id',
            'assigned_user_id' => 'required|integer|exists:users,id',
            'priority' => 'sometimes|string|in:Low,Medium,High',
            'due_date' => 'nullable|date',
            'assigned_by_user_id' => 'required|integer|exists:users,id',
        ]);

        $asset = Asset::find($validated['asset_id']);
        if (!$asset) {
            return $this->notFound('Asset', $validated['asset_id']);
        }

        // Check if asset is broken down
        if ($asset->current_status !== 'En Panne') {
            return $this->error('Only broken down assets can be assigned as tasks', 400);
        }

        // Remove from global queue if exists
        $existingTask = TaskQueue::where('asset_id', $validated['asset_id'])
            ->where('task_type', 'Incident Assignment')
            ->first();

        if ($existingTask) {
            $existingTask->delete();
        }

        // Create new task
        $task = TaskQueue::create([
            'task_type' => 'Incident Assignment',
            'asset_id' => $validated['asset_id'],
            'assigned_user_id' => $validated['assigned_user_id'],
            'status' => 'Assigned',
            'due_date' => $validated['due_date'] ?? null,
            'created_by' => $request->user()->id,
        ]);

        return $this->created('Task assigned successfully', $task->id);
    }

    #[OA\Get(
        path: '/api/tasks',
        summary: 'Get tasks for user',
        description: 'Get tasks assigned to the current user or global queue',
        tags: ['Tasks'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'agent_id', in: 'query', required: false, schema: new OA\Schema(type: 'integer')),
            new OA\Parameter(name: 'status', in: 'query', required: false, schema: new OA\Schema(type: 'string', enum: ['Pending', 'Assigned', 'In Progress', 'Completed', 'Cancelled'])),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Task list'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function index(Request $request): JsonResponse
    {
        $userId = $request->user()->id;
        $agentId = $request->input('agent_id');
        $status = $request->input('status');

        $query = TaskQueue::query()
            ->with(['asset', 'assignedUser']);

        // If agent_id provided, filter by that user
        if ($agentId) {
            $query->where('assigned_user_id', $agentId);
        } else {
            // Otherwise, filter by current user
            $query->where('assigned_user_id', $userId);
        }

        if ($status) {
            $query->where('status', $status);
        }

        $tasks = $query->get()->map(function ($task) {
            return [
                'id' => $task->id,
                'task_type' => $task->task_type,
                'asset_id' => $task->asset_id,
                'asset_name' => $task->asset ? $task->asset->name : null,
                'status' => $task->status,
                'assigned_user_id' => $task->assigned_user_id,
                'assigned_user_name' => $task->assignedUser ? $task->assignedUser->name : null,
                'due_date' => $task->due_date,
                'created_at' => $task->created_at->toDateTimeString(),
                'completed_at' => $task->completed_at?->toDateTimeString(),
            ];
        })->toArray();

        return $this->success([
            'total' => count($tasks),
            'items' => $tasks,
        ]);
    }

    #[OA\Get(
        path: '/api/tasks/global-queue',
        summary: 'Get global task queue',
        description: 'Get all unassigned tasks in the global queue',
        tags: ['Tasks'],
        security: [['bearerAuth' => []]],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Global queue tasks'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function globalQueue(Request $request): JsonResponse
    {
        $tasks = TaskQueue::globalQueue()
            ->with(['asset'])
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($task) {
                return [
                    'id' => $task->id,
                    'asset_id' => $task->asset_id,
                    'asset_name' => $task->asset ? $task->asset->name : null,
                    'status' => $task->status,
                    'created_at' => $task->created_at->toDateTimeString(),
                ];
            })->toArray();

        return $this->success([
            'total' => count($tasks),
            'items' => $tasks,
        ]);
    }

    #[OA\Put(
        path: '/api/tasks/{task}',
        summary: 'Update task status',
        description: 'Update task status (e.g., mark as completed)',
        tags: ['Tasks'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'task', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        requestBody: new OA\RequestBody(
            content: new OA\JsonContent(
                required: ['status'],
                properties: [
                    new OA\Property(property: 'status', type: 'string', enum: ['Pending', 'Assigned', 'In Progress', 'Completed', 'Cancelled'], example: 'Completed'),
                ]
            )
        ),
        responses: [
            new OA\Response(
                response: 200,
                description: 'Task updated successfully'
            ),
            new OA\Response(
                response: 404,
                description: 'Task not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function update(Request $request, $id): JsonResponse
    {
        $task = TaskQueue::find($id);

        if (!$task) {
            return $this->notFound('Task', $id);
        }

        $validated = $request->validate([
            'status' => 'required|string|in:Pending,Assigned,In Progress,Completed,Cancelled',
        ]);

        if ($validated['status'] === 'Completed') {
            $task->complete();
        } else {
            $task->update(['status' => $validated['status']]);
        }

        return $this->success(['message' => 'Task updated successfully']);
    }

    #[OA\Delete(
        path: '/api/tasks/{task}',
        summary: 'Cancel task',
        description: 'Cancel or delete a task',
        tags: ['Tasks'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'task', in: 'path', required: true, schema: new OA\Schema(type: 'integer')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'Task cancelled successfully'
            ),
            new OA\Response(
                response: 404,
                description: 'Task not found'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function destroy($id): JsonResponse
    {
        $task = TaskQueue::find($id);

        if (!$task) {
            return $this->notFound('Task', $id);
        }

        $task->cancel();

        return $this->success(['message' => 'Task cancelled successfully']);
    }
}