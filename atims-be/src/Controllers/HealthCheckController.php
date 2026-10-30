<?php
declare(strict_types=1);

namespace ATIMS\Controllers;

use ATIMS\Core\Controller;
use ATIMS\Core\Database;

/**
 * Health Check Controller
 * Provides basic API health status endpoint
 */
class HealthCheckController extends Controller
{
    /**
     * Check API health status
     * 
     * @return array Response with status information
     */
    public function check(): array
    {
        try {
            $database = Database::getInstance();
            $connection = $database->getConnection();
            
            // Test database connection
            $stmt = $connection->query('SELECT 1');
            $stmt->closeCursor();
            
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
