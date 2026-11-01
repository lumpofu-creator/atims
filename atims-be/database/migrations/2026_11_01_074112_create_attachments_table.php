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
        Schema::create('attachments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('inspection_log_id')->nullable()->constrained('inspections')->nullOnDelete();
            $table->foreignId('ledger_event_id')->nullable()->constrained('ledgers')->nullOnDelete();
            $table->string('file_path', 255);
            $table->string('file_name', 255);
            $table->bigInteger('file_size');
            $table->string('file_type', 32);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('attachments');
    }
};
