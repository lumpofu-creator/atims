<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Incident;
use App\Models\IncidentActivity;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class IncidentActivityController extends Controller
{
    public function index(Incident $incident): JsonResponse
    {
        $items = [[
            'id' => 'reported-'.$incident->id,
            'type' => 'reported',
            'body' => $incident->field_notes,
            'author_name' => $incident->reporter?->name ?? 'Reporter',
            'created_at' => $incident->created_at?->toISOString(),
        ]];

        $activities = $incident->activities()->with('user')->orderBy('created_at')->orderBy('id')->get();
        foreach ($activities as $activity) {
            $items[] = [
                'id' => $activity->id,
                'type' => $activity->entry_type,
                'body' => $activity->body,
                'author_name' => $activity->user?->name ?? ($activity->entry_type === 'note' ? 'Team member' : 'System'),
                'created_at' => $activity->created_at?->toISOString(),
            ];
        }

        if ($incident->resolution_notes) {
            $items[] = [
                'id' => 'resolved-'.$incident->id,
                'type' => 'resolution',
                'body' => $incident->resolution_notes,
                'author_name' => $incident->resolver?->name ?? 'Repair verification',
                'created_at' => ($incident->resolved_at ?? $incident->updated_at ?? $incident->created_at)?->toISOString(),
            ];
        }

        usort($items, fn (array $a, array $b) => strcmp((string) $b['created_at'], (string) $a['created_at']));

        return $this->success(['items' => $items]);
    }

    public function store(Request $request, Incident $incident): JsonResponse
    {
        $validated = $request->validate([
            'body' => 'required|string|max:5000',
        ]);

        $activity = IncidentActivity::create([
            'incident_id' => $incident->id,
            'user_id' => $request->user()?->id,
            'entry_type' => 'note',
            'body' => trim($validated['body']),
        ]);

        return $this->created('Activity note added', $activity->id, [
            'activity' => [
                'id' => $activity->id,
                'type' => $activity->entry_type,
                'body' => $activity->body,
                'author_name' => $request->user()?->name ?? 'Team member',
                'created_at' => $activity->created_at?->toISOString(),
            ],
        ]);
    }
}
