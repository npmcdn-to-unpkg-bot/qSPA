<?php

use Illuminate\Database\Seeder;

//use Eloquent as Eloquent;

use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        Model::unguard();
    
        /*
        * Seed already performed.
        * Uncomment the following to use them.
        */
        /*
        $this->call('CommentTableSeeder');
        $this->command -> info('Comment table seeded.');

        $this->call('MailTableSeeder');
        $this->command -> info('Mail table seeded.');
        */

        $this->call('AlertTableSeeder');
        $this->command -> info('Alert table seeded.');


        Model::reguard();
    }
}
