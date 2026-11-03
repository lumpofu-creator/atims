<?php

namespace App\Services;

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
    const GEOFENCE_THRESHOLD_KM = 10000.0;

    /**
     * Calculate distance between two coordinates using Haversine formula
     */
    public function calculateDistance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        $lat1Rad = deg2rad($lat1);
        $lon1Rad = deg2rad($lon1);
        $lat2Rad = deg2rad($lat2);
        $lon2Rad = deg2rad($lon2);

        $deltaLat = $lat2Rad - $lat1Rad;
        $deltaLon = $lon2Rad - $lon1Rad;

        $a = sin($deltaLat / 2) ** 2
           + cos($lat1Rad) * cos($lat2Rad) * sin($deltaLon / 2) ** 2;

        $c = 2 * asin(sqrt($a));

        return self::EARTH_RADIUS_KM * $c;
    }

    /**
     * Calculate distance using MySQL spatial functions
     */
    public function calculateDistanceMeters(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        return $this->calculateDistance($lat1, $lon1, $lat2, $lon2) * 1000;
    }

    /**
     * Check if GPS accuracy meets threshold
     */
    public function isAccuracyValid(float $accuracy): bool
    {
        return $accuracy <= self::GPS_ACCURACY_THRESHOLD_M;
    }

    /**
     * Check if distance exceeds geofence threshold
     */
    public function isGeofenceBreach(float $distance): bool
    {
        return $distance > self::GEOFENCE_THRESHOLD_KM;
    }

    /**
     * Calculate distance between asset location and inspection coordinates
     */
    public function getDistanceFromAsset(int $assetId, float $inspectionLat, float $inspectionLon): float
    {
        // In Laravel, you would fetch asset location from database
        // This is a placeholder implementation
        throw new \Exception('Asset location not implemented');
    }
}
