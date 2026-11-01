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
        Schema::create('ledgers', function (Blueprint $table) {
            $table->id();
            $table->enum('event_type', ['Status Change', 'Asset Update', 'Location Drift Anomaly', 'Repair Closure', 'Other']);
            $table->string('table_name', 64);
            $table->unsignedBigInteger('record_id');
            $table->json('old_data')->nullable();
            $table->json('new_data');
            $table->foreignId('user_id')->constrained('users');
            $table->ipAddress('ip_address')->nullable();
            $table->string('device_type', 64)->nullable();
            $table->json('metadata')->nullable();
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ledgers');
    }
};
