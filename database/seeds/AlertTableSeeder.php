<?php

use Illuminate\Database\Seeder;

use App\Alert as Alert;

class AlertTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('alerts') -> delete(); // clean it up: this is supposed to be done only once
    
        Alert::create([
            'type' => 1, // info
            'title' => 'Free Trial Expiration Date',
            'body' => 'Dec 7, 2013 12:32:00' . 
            	'<br>ronna@buildme.ru is ...<br> '.
            	'Hello there friend ...'
        ]);
    }
}
