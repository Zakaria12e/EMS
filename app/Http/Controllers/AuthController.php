<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function login(){

        return view('auth.login');
    }
    public function signup(){

        return view('auth.signup');
    }

    public function postsignup(Request $request)
    {
        $check_email = User::where('email', $request->email)->first();
        if($check_email){
            return back()->with('error', 'Email already in use');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);


        return redirect()->route('admin.pages');
    }

}
