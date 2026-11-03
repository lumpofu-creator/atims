<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('incidents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_id')->constrained()->cascadeOnDelete();
            $table->foreignId('reported_by')->nullable()->constrained('users')->nullOnDelete();
            $table->text('field_notes');
            $table->string('status', 40)->default('open')->index();
            $table->decimal('device_latitude', 10, 8)->nullable();
            $table->decimal('device_longitude', 11, 8)->nullable();
            $table->timestamp('device_timestamp')->nullable();
            $table->text('resolution_notes')->nullable();
            $table->foreignId('resolved_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('resolved_at')->nullable();
            $table->timestamps();
            $table->index(['asset_id', 'status']);
        });

        Schema::table('attachments', function (Blueprint $table) {
            $table->foreignId('incident_id')->nullable()->after('inspection_log_id')->constrained('incidents')->nullOnDelete();
            $table->unsignedBigInteger('user_id')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('attachments', function (Blueprint $table) {
            $table->dropConstrainedForeignId('incident_id');
            $table->unsignedBigInteger('user_id')->nullable(false)->change();
        });
        Schema::dropIfExists('incidents');
    }
};
