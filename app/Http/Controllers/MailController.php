<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Mail as Mail;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return \Response::json(Mail::get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
            
        Mail::create([
            'sender' => $request -> input('sender'),
            'subject' => $request -> input('subject'),
            'date' => $request -> input('date'),
            'recipients' => $request -> input('recipients'),
            'message' => $request -> input('message'),
            ]);

        return \Response::json(['success' => true], 200);
    }


    public function show($id)
    {
        
        //$message = Mail::find($id);
        $message = Mail::where('id', '=', $id) -> first();

        // do some if failed...

        if ($message == null) {
            return \Response::json(['error' => true], 404);
        }

        return \Response::json($message);
    }


    public function update(Request $input, $id) {
        $message = Mail::where('id', '=', $id) -> first();

        if ($message == null) {
            return \Response::json(['error' => true], 404);
        }

        $message -> subject     = $input -> get('subject');
        $message -> sender      = $input -> get('sender');
        $message -> date        = $input -> get('date');
        $message -> recipients  = $input -> get('recipients');
        $message -> message     = $input -> get('message');
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
        Mail::destroy($id);

        return \Response::json(['success' => true], 200);


    }


}




