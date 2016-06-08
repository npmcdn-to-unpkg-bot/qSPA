<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

// Available only to admin.
class Alert extends Model
{
    protected $fillable = ['type', 'title', 'body'];
}
