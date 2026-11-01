<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inspections', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->enum('inspection_type', ['Routine', 'Breakdown', 'Maintenance', 'Handover']);
            $table->enum('condition_status', ['Fonctionnel', 'En Panne', 'Déclassé', 'Inconnu']);
            $table->text('field_notes')->nullable();
            $table->string('verification_image', 255)->nullable();
            $table->decimal('device_latitude', 10, 8);
            $table->decimal('device_longitude', 11, 8);
            $table->timestamp('device_timestamp');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inspections');
    }
};
