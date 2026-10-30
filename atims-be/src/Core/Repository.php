<?php
declare(strict_types=1);

namespace ATIMS\Core;

/**
 * Repository base class
 * Provides common CRUD operations
 */
abstract class Repository
{
    protected string $table;
    protected string $primaryKey = 'id';
    
    protected Database $database;
    
    public function __construct()
    {
        $this->database = Database::getInstance();
    }
    
    /**
     * Find by ID
     */
    public function findById(int $id): array|false
    {
        return $this->database->fetch(
            "SELECT * FROM $this->table WHERE $this->primaryKey = :id",
            ['id' => $id]
        );
    }
    
    /**
     * Find by multiple conditions
     */
    public function findBy(array $conditions): array
    {
        $where = [];
        $params = [];
        
        foreach ($conditions as $column => $value) {
            $where[] = "$column = :$column";
            $params[$column] = $value;
        }
        
        $sql = "SELECT * FROM $this->table WHERE " . implode(' AND ', $where);
        
        return $this->database->fetchAll($sql, $params);
    }
    
    /**
     * Find all
     */
    public function findAll(): array
    {
        return $this->database->fetchAll("SELECT * FROM $this->table");
    }
    
    /**
     * Find with limit and offset
     */
    public function findPaginated(int $limit = 20, int $offset = 0): array
    {
        return $this->database->fetchAll(
            "SELECT * FROM $this->table LIMIT :limit OFFSET :offset",
            ['limit' => $limit, 'offset' => $offset]
        );
    }
    
    /**
     * Create record
     */
    public function create(array $data): int
    {
        return $this->database->insert($this->table, $data);
    }
    
    /**
     * Update record
     */
    public function update(int $id, array $data): int
    {
        return $this->database->update(
            $this->table,
            $data,
            "$this->primaryKey = :id",
            ['id' => $id]
        );
    }
    
    /**
     * Delete record
     */
    public function delete(int $id): int
    {
        return $this->database->delete(
            $this->table,
            "$this->primaryKey = :id",
            ['id' => $id]
        );
    }
    
    /**
     * Count records
     */
    public function count(array $conditions = []): int
    {
        $where = '';
        $params = [];
        
        if (!empty($conditions)) {
            $whereParts = [];
            foreach ($conditions as $column => $value) {
                $whereParts[] = "$column = :$column";
                $params[$column] = $value;
            }
            $where = ' WHERE ' . implode(' AND ', $whereParts);
        }
        
        $result = $this->database->fetch(
            "SELECT COUNT(*) as count FROM $this->table$where",
            $params
        );
        
        return (int)($result['count'] ?? 0);
    }
    
    /**
     * Check if record exists
     */
    public function exists(int $id): bool
    {
        $result = $this->database->fetch(
            "SELECT COUNT(*) as count FROM $this->table WHERE $this->primaryKey = :id",
            ['id' => $id]
        );
        
        return (int)($result['count'] ?? 0) > 0;
    }
}
