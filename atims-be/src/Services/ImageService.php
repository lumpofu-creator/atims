<?php
declare(strict_types=1);

namespace ATIMS\Services;

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
     * 
     * @param string $sourcePath Source image path
     * @param string $destinationPath Destination image path
     * @param int $maxSizeKB Maximum size in KB (default 800)
     * @return array Compression result with size info
     */
    public function compressForMobile(string $sourcePath, string $destinationPath, int $maxSizeKB = self::MAX_SIZE_MOBILE_KB): array
    {
        if (!$this->isGDAvailable()) {
            // Fallback: copy without compression if GD not available
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
     * 
     * @param string $sourcePath Source image path
     * @param string $destinationPath Destination image path
     * @param int $maxSizeMB Maximum size in MB (default 5)
     * @return array Compression result with size info
     */
    public function compressForDesktop(string $sourcePath, string $destinationPath, int $maxSizeMB = self::MAX_SIZE_DESKTOP_MB): array
    {
        if (!$this->isGDAvailable()) {
            // Fallback: copy without compression if GD not available
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
     * 
     * @param int $fileSize File size in bytes
     * @param int $maxSize Max allowed size in bytes
     * @return bool True if file size is valid
     */
    public function isValidSize(int $fileSize, int $maxSize): bool
    {
        return $fileSize <= $maxSize;
    }
    
    /**
     * Check if file needs compression
     * 
     * @param int $fileSize File size in bytes
     * @param int $maxSize Max allowed size in bytes
     * @return bool True if compression is needed
     */
    public function needsCompression(int $fileSize, int $maxSize): bool
    {
        return $fileSize > $maxSize;
    }
    
    /**
     * Get file size limit for device type
     * 
     * @param string $deviceType Device type ('mobile' or 'desktop')
     * @return int Maximum file size in bytes
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
     * 
     * @param string $sourcePath Source image path
     * @param string $destinationPath Destination image path
     * @param int $maxBytes Maximum size in bytes
     * @param int $quality Initial quality (0-100)
     * @return array Compression result
     */
    private function compressImage(string $sourcePath, string $destinationPath, int $maxBytes, int $quality = self::QUALITY_MEDIUM): array
    {
        // Get source file info
        $sourceSize = filesize($sourcePath);
        $mimeType = $this->getMimeType($sourcePath);
        
        // Get image dimensions
        $imageInfo = getimagesize($sourcePath);
        if (!$imageInfo) {
            throw new \Exception("Invalid image file: $sourcePath");
        }
        
        $width = $imageInfo[0];
        $height = $imageInfo[1];
        
        // Create image resource
        $image = $this->createImageFromType($sourcePath, $mimeType);
        if (!$image) {
            throw new \Exception("Failed to create image from: $sourcePath");
        }
        
        // If already under limit, copy without re-compression
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
        
        // Try compression with quality reduction
        $compressedSize = $this->attemptCompression($image, $destinationPath, $mimeType, $maxBytes, $quality);
        
        // If still too large, try resizing
        if ($compressedSize > $maxBytes) {
            $image = $this->createImageFromType($sourcePath, $mimeType);
            [$newWidth, $newHeight] = $this->calculateResizedDimensions($width, $height, $maxBytes, $sourceSize);
            $compressedSize = $this->attemptResizeAndCompress($image, $destinationPath, $mimeType, $maxBytes, $newWidth, $newHeight, $quality);
        }
        
        // Clean up
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
        // Calculate scaling factor to reduce file size
        $scaleFactor = sqrt($maxBytes / $originalSize);
        $newWidth = (int)($width * $scaleFactor);
        $newHeight = (int)($height * $scaleFactor);
        
        // Ensure minimum dimensions
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
                // PNG quality is compression level (0-9)
                imagepng($image, $path, min(9, (int)(9 - $quality / 10)));
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
     * 
     * @param string $filePath File path
     * @param string $deviceType Device type
     * @return array Validation result
     */
    public function validateImage(string $filePath, string $deviceType): array
    {
        $result = [
            'valid' => true,
            'errors' => [],
        ];
        
        // Check file exists
        if (!file_exists($filePath)) {
            $result['valid'] = false;
            $result['errors'][] = 'File not found';
            return $result;
        }
        
        // Check MIME type (use finfo without GD)
        $allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
        $mimeType = $this->getMimeType($filePath);
        
        if (!in_array($mimeType, $allowedTypes)) {
            $result['valid'] = false;
            $result['errors'][] = 'Invalid file type. Only JPEG, PNG, and GIF are allowed.';
            return $result;
        }
        
        // Check file size
        $fileSize = filesize($filePath);
        $maxSize = $this->getMaxSize($deviceType);
        
        if (!$this->isValidSize($fileSize, $maxSize)) {
            $result['valid'] = false;
            $result['errors'][] = "File size exceeds limit. Maximum: " . ($maxSize / 1024) . " KB";
            return $result;
        }
        
        // Check if GD is available for actual image processing
        if (!$this->isGDAvailable()) {
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
