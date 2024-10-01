<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  use HasFactory;

  protected $fillable = ['customer_id', 'merchant_id', 'total_amount', 'order_date', 'delivery_date', 'status'];

  public function customer()
  {
    return $this->belongsTo(User::class, 'customer_id');
  }

  public function merchant()
  {
    return $this->belongsTo(User::class, 'merchant_id');
  }

  public function items()
  {
    return $this->hasMany(OrderItem::class);
  }

  public function invoice()
  {
    return $this->hasOne(Invoice::class);
  }
}
