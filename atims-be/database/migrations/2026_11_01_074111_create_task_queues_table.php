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
        Schema::create('task_queues', function (Blueprint $table) {
            $table->id();
            $table->enum('task_type', ['Incident Assignment', 'Maintenance Schedule', 'Routine Inspection', 'Drift Review']);
            $table->foreignId('asset_id')->nullable()->constrained('assets')->nullOnDelete();
            $table->foreignId('assigned_user_id')->nullable()->constrained('users')->nullOnDelete();
            $table->integer('global_queue_order')->nullable()->index();
            $table->enum('status', ['Pending', 'Assigned', 'In Progress', 'Completed', 'Cancelled'])->default('Pending');
            $table->date('due_date')->nullable();
            $table->timestamps();
            $table->timestamp('completed_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_queues');
    }
};
