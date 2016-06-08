<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class MembersController extends Controller
{
    public function show($id) {
    	return response('Member data with ID: '. $id);
    }
}
