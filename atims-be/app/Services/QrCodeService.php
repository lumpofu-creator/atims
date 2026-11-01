<?php

namespace App\Services;

/**
 * QR Code Service
 * Implements Requirement 6 - QR Code Generation and Dual Routing
 */
class QrCodeService
{
    /**
     * Generate unique State ID
     * Format: [PREFIX]-[6 DIGITS] (e.g., FLEET-000123)
     */
    public function generateStateId(string $prefix, int $sequence): string
    {
        $formattedSequence = str_pad((string) $sequence, 6, '0', STR_PAD_LEFT);

        return strtoupper("$prefix-$formattedSequence");
    }

    /**
     * Generate simplified QR URL pattern
     */
    public function generateQrUrl(string $stateId, bool $publicRoute = false, bool $authenticated = false): string
    {
        if ($publicRoute) {
            return "/api/qrcode/verify/$stateId";
        }

        if ($authenticated) {
            return "/api/qrcode/scan/$stateId";
        }

        return "/api/qrcode/scan/$stateId";
    }

    /**
     * Parse State ID from QR code data
     */
    public function parseQrData(string $qrData): ?array
    {
        $patterns = [
            '/\/api\/qrcode\/scan\/([A-Z]+-\d{6})$/',
            '/\/api\/qrcode\/verify\/([A-Z]+-\d{6})$/',
            '/^([A-Z]+-\d{6})$/',
        ];

        foreach ($patterns as $pattern) {
            if (preg_match($pattern, $qrData, $matches)) {
                return [
                    'state_id' => $matches[1],
                    'type' => str_contains($qrData, '/verify/') ? 'verify' : 'scan',
                ];
            }
        }

        return null;
    }

    /**
     * Validate State ID format
     */
    public function isValidStateId(string $stateId): bool
    {
        return (bool) preg_match('/^[A-Z]+-\d{6}$/', $stateId);
    }

    /**
     * Extract prefix from State ID
     */
    public function extractPrefix(string $stateId): string
    {
        $parts = explode('-', $stateId);

        return $parts[0] ?? '';
    }

    /**
     * Extract sequence number from State ID
     */
    public function extractSequence(string $stateId): int
    {
        $parts = explode('-', $stateId);
        if (count($parts) !== 2) {
            return 0;
        }

        return (int) $parts[1];
    }

    /**
     * Generate QR code image content (placeholder)
     */
    public function generateQrCode(string $data, int $size = 256, string $format = 'png'): string
    {
        return 'qr_code_placeholder_'.md5($data).'.'.$format;
    }

    /**
     * Generate print-ready tag template data
     */
    public function generateTagTemplate(string $stateId, string $name, string $category, string $qrCodeImage): array
    {
        return [
            'state_id' => $stateId,
            'name' => $name,
            'category' => $category,
            'qr_code' => $qrCodeImage,
            'print_settings' => [
                'label_size' => '50mm_x_30mm',
                'orientation' => 'portrait',
                ' margins' => [
                    'top' => 2,
                    'right' => 2,
                    'bottom' => 2,
                    'left' => 2,
                ],
            ],
        ];
    }
}
