<?php

use Illuminate\Database\Seeder;

use App\Comment as Comment;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        DB::table('comments') -> delete();
    
        Comment::create([
            'author' => 'Pappaino',
            'text' => 'Fucking comment.'
        
        ]);
    
        Comment::create([
            'author' => 'Daddy',
            'text' => 'No comment.'
        ]);
    
        Comment::create([
            'author' => 'Ronna',
            'text' => 'I am a badass b!*ch.'
        ]);

    }
  
}
