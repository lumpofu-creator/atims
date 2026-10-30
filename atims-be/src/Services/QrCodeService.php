<?php
declare(strict_types=1);

namespace ATIMS\Services;

/**
 * QR Code Service
 * Implements Requirement 6 - QR Code Generation and Dual Routing
 */
class QrCodeService
{
    /**
     * Generate unique State ID
     * Format: [PREFIX]-[6 DIGITS] (e.g., FLEET-000123)
     * 
     * @param string $prefix Category prefix
     * @param int $sequence Number sequence
     * @return string Formatted State ID
     */
    public function generateStateId(string $prefix, int $sequence): string
    {
        $formattedSequence = str_pad((string)$sequence, 6, '0', STR_PAD_LEFT);
        return strtoupper("$prefix-$formattedSequence");
    }
    
    /**
     * Generate simplified QR URL pattern
     * Optimized for low-density scanning on mobile devices
     * 
     * @param string $stateId Asset State ID
     * @param bool $publicRoute If true, generates public read-only route
     * @param bool $authenticated If true, generates authenticated route for field agents
     * @return string QR code URL
     */
    public function generateQrUrl(string $stateId, bool $publicRoute = false, bool $authenticated = false): string
    {
        // Simplified URL pattern for QR code
        // Base: /api/qrcode/
        // Authenticated field agent: /api/qrcode/scan/FLEET-000123
        // Public: /api/qrcode/verify/FLEET-000123
        
        if ($publicRoute) {
            return "/api/qrcode/verify/$stateId";
        }
        
        if ($authenticated) {
            return "/api/qrcode/scan/$stateId";
        }
        
        // Default: field agent scan mode
        return "/api/qrcode/scan/$stateId";
    }
    
    /**
     * Parse State ID from QR code data
     * 
     * @param string $qrData QR code decoded data
     * @return array|null Parsed data or null if invalid
     */
    public function parseQrData(string $qrData): ?array
    {
        // Expected formats:
        // - /api/qrcode/scan/FLEET-000123
        // - /api/qrcode/verify/FLEET-000123
        // - FLEET-000123
        
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
     * 
     * @param string $stateId State ID to validate
     * @return bool True if valid format
     */
    public function isValidStateId(string $stateId): bool
    {
        return (bool)preg_match('/^[A-Z]+-\d{6}$/', $stateId);
    }
    
    /**
     * Extract prefix from State ID
     * 
     * @param string $stateId State ID
     * @return string Prefix
     */
    public function extractPrefix(string $stateId): string
    {
        $parts = explode('-', $stateId);
        return $parts[0] ?? '';
    }
    
    /**
     * Extract sequence number from State ID
     * 
     * @param string $stateId State ID
     * @return int Sequence number
     */
    public function extractSequence(string $stateId): int
    {
        $parts = explode('-', $stateId);
        if (count($parts) !== 2) {
            return 0;
        }
        
        return (int)$parts[1];
    }
    
    /**
     * Generate QR code image content (placeholder for actual QR library)
     * In production, use a library like endroid/qr-code
     * 
     * @param string $data Data to encode
     * @param int $size Image size in pixels
     * @param string $format Output format (png, jpg)
     * @return string Base64 encoded image or file path
     */
    public function generateQrCode(string $data, int $size = 256, string $format = 'png'): string
    {
        // This is a placeholder for QR code generation
        // In production, use a library like:
        // composer require endroid/qr-code
        
        // Example with endroid/qr-code:
        // $qrCode = new QrCode($data);
        // $qrCode->setSize($size);
        // $qrCode->setWriterByName($format);
        // $qrCode->writeFile($filePath);
        
        // For now, return a placeholder
        // In production, this would return the actual QR code image data
        
        return 'qr_code_placeholder_' . md5($data) . '.' . $format;
    }
    
    /**
     * Generate print-ready tag template data
     * 
     * @param string $stateId State ID
     * @param string $name Asset name
     * @param string $category Category name
     * @param string $qrCodeImage QR code image path/URL
     * @return array Tag template data
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
