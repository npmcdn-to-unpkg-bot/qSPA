<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Item as Item;

class PaginatedItemController extends Controller
{
	// Retreive paginated items.
    public function index() {
    	return response(Item::paginate());

    }
}
