<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('incidents', function (Blueprint $table) {
            $table->foreignId('assigned_user_id')->nullable()->after('reported_by')->constrained('users')->nullOnDelete();
            $table->foreignId('assigned_by_user_id')->nullable()->after('assigned_user_id')->constrained('users')->nullOnDelete();
        });

        Schema::table('task_queues', function (Blueprint $table) {
            $table->foreignId('incident_id')->nullable()->after('asset_id')->unique()->constrained('incidents')->nullOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('task_queues', function (Blueprint $table) {
            $table->dropConstrainedForeignId('incident_id');
        });

        Schema::table('incidents', function (Blueprint $table) {
            $table->dropConstrainedForeignId('assigned_user_id');
            $table->dropConstrainedForeignId('assigned_by_user_id');
        });

    }
};
