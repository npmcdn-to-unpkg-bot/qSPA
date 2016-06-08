<?php

use Illuminate\Database\Seeder;

use App\Mail as Mail; 

class MailTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('mails') -> delete();
    
        Mail::create([
            'sender' => 'richard@e-quilibrium.com',
            'subject' => 'Free Trial Expiration Date',
            'date' => 'Dec 7, 2013 12:32:00',
            'recipients' => 'ronna@buildme.ru',
            'message' => 'Hello there friend ...'
        
        ]);

        Mail::create([
            'sender' => 'richard@e-quilibrium.com',
            'subject' => 'Free Trial Expiration Date',
            'date' => 'Dec 7, 2013 12:32:00',
            'recipients' => 'carlos@casadelcerro.es',
            'message' => 'Hello there friend ...'
        
        ]);

        Mail::create([
            'sender' => 'richard@e-quilibrium.com',
            'subject' => 'Free Trial Expiration Date',
            'date' => 'Dec 7, 2013 12:32:00',
            'recipients' => 'josemarquez@eljuri.com.ec',
            'message' => 'Hello there friend ...'
        
        ]);

        Mail::create([
            'sender' => 'richard@e-quilibrium.com',
            'subject' => 'Free Trial Expiration Date',
            'date' => 'Dec 7, 2013 12:32:00',
            'recipients' => 'carlos@casadelcerro.es',
            'message' => 'Hey, we should get together for lunch sometime and catch up.' . 
            'There are many things we should collaborate on this year.'
        
        ]);

        Mail::create([
            'sender' => 'richard@e-quilibrium.com',
            'subject' => 'Free Trial Expiration Date',
            'date' => 'Dec 7, 2013 12:32:00',
            'recipients' => 'carlos@casadelcerro.es',
            'message' => 'Hey, we should get together for lunch sometime and catch up.' . 
            'There are many things we should collaborate on this year.'

        
        ]);


    
        
    }
}
