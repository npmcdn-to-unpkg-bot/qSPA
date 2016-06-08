<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    protected $fillable = ['subject', 'sender', 'date', 'recipients', 'message'];
}
