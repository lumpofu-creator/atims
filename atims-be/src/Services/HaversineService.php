<?php
declare(strict_types=1);

namespace ATIMS\Services;

use ATIMS\Core\Database;

/**
 * Haversine distance calculation service
 * Implements Requirement 4.1 and 4.4
 * Earth radius: 6371 km
 */
class HaversineService
{
    // Earth radius in kilometers (Requirement 4.4)
    const EARTH_RADIUS_KM = 6371;
    const EARTH_RADIUS_M = 6371000;
    
    // GPS accuracy threshold (Requirement 3.5)
    const GPS_ACCURACY_THRESHOLD_M = 15.0;
    
    // Geofence threshold (Requirement 4.2)
    const GEOFENCE_THRESHOLD_KM = 2.0;
    
    private Database $database;
    
    public function __construct()
    {
        $this->database = Database::getInstance();
    }
    
    /**
     * Calculate distance between two coordinates using Haversine formula
     * 
     * @param float $lat1 Latitude of first point (WGS 84)
     * @param float $lon1 Longitude of first point (WGS 84)
     * @param float $lat2 Latitude of second point (WGS 84)
     * @param float $lon2 Longitude of second point (WGS 84)
     * @return float Distance in kilometers
     */
    public function calculateDistance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        // Convert degrees to radians
        $lat1Rad = deg2rad($lat1);
        $lon1Rad = deg2rad($lon1);
        $lat2Rad = deg2rad($lat2);
        $lon2Rad = deg2rad($lon2);
        
        // Differences
        $deltaLat = $lat2Rad - $lat1Rad;
        $deltaLon = $lon2Rad - $lon1Rad;
        
        // Haversine formula
        $a = sin($deltaLat / 2) ** 2
           + cos($lat1Rad) * cos($lat2Rad) * sin($deltaLon / 2) ** 2;
        
        $c = 2 * asin(sqrt($a));
        
        // Distance in kilometers
        return self::EARTH_RADIUS_KM * $c;
    }
    
    /**
     * Calculate distance using MySQL spatial functions
     * More efficient for database queries
     * 
     * @param float $lat1 Latitude of first point
     * @param float $lon1 Longitude of first point
     * @param float $lat2 Latitude of second point
     * @param float $lon2 Longitude of second point
     * @return float Distance in meters
     */
    public function calculateDistanceMeters(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        return $this->calculateDistance($lat1, $lon1, $lat2, $lon2) * 1000;
    }
    
    /**
     * Check if GPS accuracy meets threshold
     * 
     * @param float $accuracy GPS accuracy in meters
     * @return bool True if accuracy is below threshold
     */
    public function isAccuracyValid(float $accuracy): bool
    {
        return $accuracy <= self::GPS_ACCURACY_THRESHOLD_M;
    }
    
    /**
     * Check if distance exceeds geofence threshold
     * 
     * @param float $distance Distance in kilometers
     * @return bool True if distance exceeds threshold
     */
    public function isGeofenceBreach(float $distance): bool
    {
        return $distance > self::GEOFENCE_THRESHOLD_KM;
    }
    
    /**
     * Get asset location from database
     * 
     * @param int $assetId Asset ID
     * @return array|null Asset location data or null if not found
     */
    public function getAssetLocation(int $assetId): ?array
    {
        $sql = "SELECT id, latitude, longitude, ST_AsText(location_point) as location_point
                FROM assets WHERE id = :id";
        
        return $this->database->fetch($sql, ['id' => $assetId]);
    }
    
    /**
     * Calculate distance between asset location and inspection coordinates
     * 
     * @param int $assetId Asset ID
     * @param float $inspectionLat Inspection latitude
     * @param float $inspectionLon Inspection longitude
     * @return float Distance in kilometers
     */
    public function getDistanceFromAsset(int $assetId, float $inspectionLat, float $inspectionLon): float
    {
        $assetLocation = $this->getAssetLocation($assetId);
        
        if (!$assetLocation) {
            throw new \Exception("Asset not found: $assetId");
        }
        
        return $this->calculateDistance(
            (float)$assetLocation['latitude'],
            (float)$assetLocation['longitude'],
            $inspectionLat,
            $inspectionLon
        );
    }
}
