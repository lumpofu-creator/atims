<?php

declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class CategoryController extends Controller
{
    #[OA\Get(
        path: '/api/categories',
        summary: 'List categories',
        description: 'Returns categories for populating selection controls. Optionally filtered by tier.',
        tags: ['Categories'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'tier', in: 'query', required: false, schema: new OA\Schema(type: 'string', enum: ['general', 'group', 'type'])),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'List of categories',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'array', items: new OA\Items(
                            properties: [
                                new OA\Property(property: 'id', type: 'integer', example: 1),
                                new OA\Property(property: 'name', type: 'string', example: 'Vehicle'),
                                new OA\Property(property: 'code', type: 'string', example: 'VEH'),
                                new OA\Property(property: 'tier', type: 'string', example: 'type'),
                            ]
                        )),
                    ]
                )
            ),
            new OA\Response(response: 401, description: 'Unauthorized'),
        ]
    )]
    public function index(Request $request): JsonResponse
    {
        $tier = $request->input('tier', $request->input('category_type'));

        $query = Category::query()
            ->select('id', 'name', 'code', 'tier', 'parent_id')
            ->orderBy('name');

        if ($tier) {
            $query->where('tier', $tier);
        }

        $categories = $query->get()->map(fn (Category $category): array => [
            'id' => $category->id,
            'name' => $category->name,
            'code' => $category->code,
            'tier' => $category->tier,
            'parent_id' => $category->parent_id,
        ])->all();

        return $this->success($categories);
    }
}
