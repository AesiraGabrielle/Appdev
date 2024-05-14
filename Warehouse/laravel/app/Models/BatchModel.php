<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BatchModel extends Model
{
    use HasFactory;
    protected $table = 'stocks_orders';

    protected $fillable = [
        'employee_id', 
        'item_name', 
        'recieved_date', 
        'quantity', 
        'batchInOut', 
        'description', 
        'batch_info', 
        'logo'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }
}
