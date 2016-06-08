<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Item as Item;

class ItemController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \Response::json(Item::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
            
        Item::create([
            'description' => $request -> input('description'),
            'price' => $request -> input('price'),
            'quantity' => $request -> input('quantity')
            ]);

        return \Response::json(['success' => true], 200);
    }


    /**
     * Does some shit.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
        //$message = Item::find($id);
        //$msg = Item::findOrFail($id); // giving problems for some reason...
        $message = Item::where('id', '=', $id) -> first();

        if ($message == null) {
            return \Response::json(['error' => true], 404);
        }

        return \Response::json($message);
    }

    /**
     * Does some shit.
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $input, $id) {
        $message = Item::where('id', '=', $id) -> first();

        if ($message == null) {
            return \Response::json(['error' => true], 404);
        }


        $message -> description     = $input -> get('description');
        $message -> price           = $input -> get('price');
        $message -> quantity        = $input -> get('quantity');
        $message -> save();

        return response($message, 200)
            -> header('Content-Type', 'application/json');

    }




    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Item::destroy($id);

        return \Response::json(['success' => true], 200);


    }
}
