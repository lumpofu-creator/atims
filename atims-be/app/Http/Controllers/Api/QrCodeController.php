<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\QrCodeService;
use Illuminate\Http\Request;
use OpenApi\Attributes as OA;

class QrCodeController extends Controller
{
    protected QrCodeService $qrCodeService;

    public function __construct(QrCodeService $qrCodeService)
    {
        $this->qrCodeService = $qrCodeService;
    }

    #[OA\Get(
        path: '/api/qrcode/scan/{stateId}',
        summary: 'Scan QR code (for field agents)',
        description: 'Scan a QR code for field agents. Requires authentication.',
        tags: ['QR Code'],
        security: [['bearerAuth' => []]],
        parameters: [
            new OA\Parameter(name: 'stateId', in: 'path', required: true, schema: new OA\Schema(type: 'string')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'QR scan successful',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'state_id', type: 'string', example: 'ASSET-001'),
                            new OA\Property(property: 'type', type: 'string', example: 'scan'),
                            new OA\Property(property: 'scan_time', type: 'string', example: '2026-11-01 10:00:00'),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 400,
                description: 'Invalid State ID format'
            ),
            new OA\Response(
                response: 401,
                description: 'Unauthorized'
            ),
        ]
    )]
    public function scan(Request $request, string $stateId)
    {
        if (! $this->qrCodeService->isValidStateId($stateId)) {
            return $this->error('Invalid State ID format', 400);
        }

        // Example implementation - replace with actual scan logic
        return $this->success([
            'state_id' => $stateId,
            'type' => 'scan',
            'scan_time' => now()->toDateTimeString(),
        ]);
    }

    #[OA\Get(
        path: '/api/qrcode/verify/{stateId}',
        summary: 'Verify QR code (public)',
        description: 'Verify a QR code for public verification. No authentication required.',
        tags: ['QR Code'],
        parameters: [
            new OA\Parameter(name: 'stateId', in: 'path', required: true, schema: new OA\Schema(type: 'string')),
        ],
        responses: [
            new OA\Response(
                response: 200,
                description: 'QR verification successful',
                content: new OA\JsonContent(
                    properties: [
                        new OA\Property(property: 'success', type: 'boolean', example: true),
                        new OA\Property(property: 'data', type: 'object', properties: [
                            new OA\Property(property: 'state_id', type: 'string', example: 'ASSET-001'),
                            new OA\Property(property: 'type', type: 'string', example: 'verify'),
                            new OA\Property(property: 'verified', type: 'boolean', example: true),
                        ]),
                    ]
                )
            ),
            new OA\Response(
                response: 400,
                description: 'Invalid State ID format'
            ),
        ]
    )]
    public function verify(Request $request, string $stateId)
    {
        if (! $this->qrCodeService->isValidStateId($stateId)) {
            return $this->error('Invalid State ID format', 400);
        }

        // Example implementation - replace with actual verification logic
        return $this->success([
            'state_id' => $stateId,
            'type' => 'verify',
            'verified' => true,
        ]);
    }
}
