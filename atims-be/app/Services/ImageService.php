<?php

namespace App\Services;

/**
 * Image Compression Service
 * Implements Requirement 8 - Document Upload System
 * File size limits: 800KB for mobile, 5MB for desktop
 */
class ImageService
{
    // File size limits (Requirement 8.2, 8.3)
    const MAX_SIZE_MOBILE_KB = 800;

    const MAX_SIZE_DESKTOP_MB = 5;

    // Compression quality (0-100)
    const QUALITY_LOW = 50;

    const QUALITY_MEDIUM = 75;

    const QUALITY_HIGH = 90;

    /**
     * Compress image for mobile upload (800KB limit)
     */
    public function compressForMobile(string $sourcePath, string $destinationPath, int $maxSizeKB = self::MAX_SIZE_MOBILE_KB): array
    {
        if (! $this->isGDAvailable()) {
            if (copy($sourcePath, $destinationPath)) {
                return [
                    'success' => true,
                    'original_size' => filesize($sourcePath),
                    'compressed_size' => filesize($destinationPath),
                    'compressed' => false,
                    'quality' => self::QUALITY_MEDIUM,
                    'warning' => 'GD extension not available - file copied without compression',
                ];
            }
            throw new \Exception('Failed to copy file');
        }

        return $this->compressImage($sourcePath, $destinationPath, $maxSizeKB * 1024, self::QUALITY_MEDIUM);
    }

    /**
     * Compress image for desktop upload (5MB limit)
     */
    public function compressForDesktop(string $sourcePath, string $destinationPath, int $maxSizeMB = self::MAX_SIZE_DESKTOP_MB): array
    {
        if (! $this->isGDAvailable()) {
            if (copy($sourcePath, $destinationPath)) {
                return [
                    'success' => true,
                    'original_size' => filesize($sourcePath),
                    'compressed_size' => filesize($destinationPath),
                    'compressed' => false,
                    'quality' => self::QUALITY_HIGH,
                    'warning' => 'GD extension not available - file copied without compression',
                ];
            }
            throw new \Exception('Failed to copy file');
        }

        return $this->compressImage($sourcePath, $destinationPath, $maxSizeMB * 1024 * 1024, self::QUALITY_HIGH);
    }

    /**
     * Validate file size
     */
    public function isValidSize(int $fileSize, int $maxSize): bool
    {
        return $fileSize <= $maxSize;
    }

    /**
     * Check if file needs compression
     */
    public function needsCompression(int $fileSize, int $maxSize): bool
    {
        return $fileSize > $maxSize;
    }

    /**
     * Get file size limit for device type
     */
    public function getMaxSize(string $deviceType): int
    {
        if ($deviceType === 'mobile') {
            return self::MAX_SIZE_MOBILE_KB * 1024;
        }

        return self::MAX_SIZE_DESKTOP_MB * 1024 * 1024;
    }

    /**
     * Compress image to target size
     */
    private function compressImage(string $sourcePath, string $destinationPath, int $maxBytes, int $quality = self::QUALITY_MEDIUM): array
    {
        $sourceSize = filesize($sourcePath);
        $mimeType = $this->getMimeType($sourcePath);

        $imageInfo = getimagesize($sourcePath);
        if (! $imageInfo) {
            throw new \Exception("Invalid image file: $sourcePath");
        }

        $width = $imageInfo[0];
        $height = $imageInfo[1];

        $image = $this->createImageFromType($sourcePath, $mimeType);
        if (! $image) {
            throw new \Exception("Failed to create image from: $sourcePath");
        }

        if ($sourceSize <= $maxBytes) {
            $this->saveImage($image, $destinationPath, $mimeType, $quality);

            return [
                'success' => true,
                'original_size' => $sourceSize,
                'compressed_size' => $sourceSize,
                'compressed' => false,
                'quality' => $quality,
            ];
        }

        $compressedSize = $this->attemptCompression($image, $destinationPath, $mimeType, $maxBytes, $quality);

        if ($compressedSize > $maxBytes) {
            $image = $this->createImageFromType($sourcePath, $mimeType);
            [$newWidth, $newHeight] = $this->calculateResizedDimensions($width, $height, $maxBytes, $sourceSize);
            $compressedSize = $this->attemptResizeAndCompress($image, $destinationPath, $mimeType, $maxBytes, $newWidth, $newHeight, $quality);
        }

        imagedestroy($image);

        return [
            'success' => $compressedSize <= $maxBytes,
            'original_size' => $sourceSize,
            'compressed_size' => $compressedSize,
            'compressed' => $compressedSize < $sourceSize,
            'quality' => $quality,
        ];
    }

    /**
     * Attempt compression with given quality
     */
    private function attemptCompression($image, string $destinationPath, string $mimeType, int $maxBytes, int $quality): int
    {
        $this->saveImage($image, $destinationPath, $mimeType, $quality);

        return filesize($destinationPath);
    }

    /**
     * Calculate resized dimensions
     */
    private function calculateResizedDimensions(int $width, int $height, int $maxBytes, int $originalSize): array
    {
        $scaleFactor = sqrt($maxBytes / $originalSize);
        $newWidth = (int) ($width * $scaleFactor);
        $newHeight = (int) ($height * $scaleFactor);

        $newWidth = max($newWidth, 320);
        $newHeight = max($newHeight, 240);

        return [$newWidth, $newHeight];
    }

    /**
     * Attempt resize and compression
     */
    private function attemptResizeAndCompress($image, string $destinationPath, string $mimeType, int $maxBytes, int $newWidth, int $newHeight, int $quality): int
    {
        $resized = imagecreatetruecolor($newWidth, $newHeight);
        imagecopyresampled($resized, $image, 0, 0, 0, 0, $newWidth, $newHeight, imagesx($image), imagesy($image));

        $this->saveImage($resized, $destinationPath, $mimeType, $quality);
        $size = filesize($destinationPath);

        imagedestroy($resized);

        return $size;
    }

    /**
     * Create image from file
     */
    private function createImageFromType(string $path, string $mimeType)
    {
        switch ($mimeType) {
            case 'image/jpeg':
            case 'image/jpg':
                return imagecreatefromjpeg($path);
            case 'image/png':
                return imagecreatefrompng($path);
            case 'image/gif':
                return imagecreatefromgif($path);
            default:
                return null;
        }
    }

    /**
     * Save image to file
     */
    private function saveImage($image, string $path, string $mimeType, int $quality): void
    {
        switch ($mimeType) {
            case 'image/jpeg':
            case 'image/jpg':
                imagejpeg($image, $path, $quality);
                break;
            case 'image/png':
                imagepng($image, $path, min(9, (int) (9 - $quality / 10)));
                break;
            case 'image/gif':
                imagegif($image, $path);
                break;
        }
    }

    /**
     * Get MIME type from file
     */
    private function getMimeType(string $path): string
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $path);
        finfo_close($finfo);

        return $mimeType;
    }

    /**
     * Validate image file
     */
    public function validateImage(string $filePath, string $deviceType): array
    {
        $result = [
            'valid' => true,
            'errors' => [],
        ];

        if (! file_exists($filePath)) {
            $result['valid'] = false;
            $result['errors'][] = 'File not found';

            return $result;
        }

        $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        $mimeType = $this->getMimeType($filePath);

        if (! in_array($mimeType, $allowedTypes)) {
            $result['valid'] = false;
            $result['errors'][] = 'Invalid file type. Only JPEG, PNG, and GIF are allowed.';

            return $result;
        }

        $fileSize = filesize($filePath);
        $maxSize = $this->getMaxSize($deviceType);

        if (! $this->isValidSize($fileSize, $maxSize)) {
            $result['valid'] = false;
            $result['errors'][] = 'File size exceeds limit. Maximum: '.($maxSize / 1024).' KB';

            return $result;
        }

        if (! $this->isGDAvailable()) {
            $result['warning'] = 'GD extension not available - image compression will not work';
        }

        return $result;
    }

    /**
     * Check if GD extension is available
     */
    private function isGDAvailable(): bool
    {
        return extension_loaded('gd');
    }
}
