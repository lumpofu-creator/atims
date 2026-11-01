<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class HealthCheckController extends Controller
{
    #[OA\Get(
        path: '/api/health',
        summary: 'Check API health status',
        description: 'Returns the health status of the API including database connection',
        tags: ['Health'],
        responses: [
            new OA\Response(
                response: 200,
                description: 'API is healthy',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'status', type: 'string', example: 'healthy'),
                            new OA\Property(property: 'database', type: 'string', example: 'connected'),
                            new OA\Property(property: 'timestamp', type: 'string', example: '2026-11-01 10:00:00'),
                            new OA\Property(property: 'version', type: 'string', example: '1.0.0'),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 500,
                description: 'Database connection failed',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: false),
                        new OA\Property(property: 'error', type: 'string', example: 'Service unhealthy'),
                        new OA\Property(property: 'details', type: 'object', properties: [
                            new OA\Property(property: 'database', type: 'string', example: 'disconnected'),
                            new OA\Property(property: 'error', type: 'string', example: 'SQLSTATE[HY000] [1045] Access denied'),
                        ]),
                    ]
                )
            ),
        ]
    )]
    public function check(Request $request)
    {
        try {
            // Test database connection
            \DB::connection()->getPdo();

            return $this->success([
                'status' => 'healthy',
                'database' => 'connected',
                'timestamp' => date('Y-m-d H:i:s'),
                'version' => '1.0.0',
            ]);
        } catch (\Exception $e) {
            return $this->error(
                'Service unhealthy',
                self::HTTP_INTERNAL_ERROR,
                ['database' => 'disconnected', 'error' => $e->getMessage()]
            );
        }
    }
}
