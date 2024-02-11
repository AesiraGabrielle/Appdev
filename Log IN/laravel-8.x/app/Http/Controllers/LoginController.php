<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Login;

class LoginController extends Controller
{
    public function index ()
    {
        $login = Login::all()->toArray();
        return response()->json($login);

    }
    public function create(Request $request)
    {
        Login::create([
            "email_address"=> $request->email_address,
            "pass_word" => $request->pass_word,
        ]);
            return "Record created";
    }
    public function get($email_address, $pass_word)
    {
        $login = Login::find($email_address, $pass_word)->toArray();
        return response()->json($login);
    }

}
