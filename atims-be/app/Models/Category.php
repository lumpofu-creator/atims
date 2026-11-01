<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[fillable([
    'name',
    'code',
    'parent_id',
    'category_type',
])]

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'parent_id',
        'category_type',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the parent category.
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    /**
     * Get the child categories.
     */
    public function children(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    /**
     * Get the assets in this category.
     */
    public function assets(): HasMany
    {
        return $this->hasMany(Asset::class, 'category_id');
    }

    /**
     * Scope a query to only include general category types.
     */
    public function scopeGeneralCategories($query)
    {
        return $query->where('category_type', 'general_category');
    }

    /**
     * Scope a query to only include asset group types.
     */
    public function scopeAssetGroups($query)
    {
        return $query->where('category_type', 'asset_group');
    }

    /**
     * Scope a query to only include asset type types.
     */
    public function scopeAssetTypes($query)
    {
        return $query->where('category_type', 'asset_type');
    }

    /**
     * Get the full hierarchy path for this category.
     */
    public function getHierarchyPath(): string
    {
        $path = [$this->name];
        $parent = $this->parent;

        while ($parent) {
            array_unshift($path, $parent->name);
            $parent = $parent->parent;
        }

        return implode(' / ', $path);
    }

    /**
     * Get all descendants of this category.
     */
    public function getAllDescendants(): array
    {
        $descendants = [];
        $this->recursiveDescendants($this->id, $descendants);

        return $descendants;
    }

    /**
     * Recursively get all descendants.
     */
    private function recursiveDescendants(int $parentId, array &$descendants): void
    {
        $children = Category::where('parent_id', $parentId)->get();

        foreach ($children as $child) {
            $descendants[] = $child;
            $this->recursiveDescendants($child->id, $descendants);
        }
    }
}
