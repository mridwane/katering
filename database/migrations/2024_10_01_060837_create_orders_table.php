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
    Schema::create('orders', function (Blueprint $table) {
      $table->id();
      $table->foreignId('customer_id')->constrained('users');
      $table->foreignId('merchant_id')->constrained('users');
      $table->decimal('total_amount', 10, 2);
      $table->timestamp('order_date');
      $table->timestamp('delivery_date');
      $table->enum('status', ['pending', 'completed', 'cancelled']);
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('orders');
  }
};
