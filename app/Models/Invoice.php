<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
  use HasFactory;

  protected $fillable = ['order_id', 'invoice_number', 'total_amount', 'payment_status'];

  public function order()
  {
    return $this->belongsTo(Order::class);
  }
}
