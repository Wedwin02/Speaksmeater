<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
          //create user admin defaul 
          $admin = User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin') 
        ]);
        
        //Asigned Role admin
        $admin->assignRole('admin');

        //create user editor defaul 
        $editor = User::create([
            'name' => 'editor',
            'email' => 'editor@gmail.com',
            'password' => Hash::make('editor') 
        ]); 
         //Asigned Role editor
        $editor->assignRole('editor');
    }
}
