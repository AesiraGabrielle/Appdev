<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Registration;

class RegistrationController extends Controller
{
    public function index ()
    {
        $registration = Registration::all()->toArray();
        return response()->json($registration);

    }
    public function create(Request $request)
    {
        Registration::create([
            "email_address"=> $request->email_address,
            "pass_word" => $request->pass_word,
            "user_name" => $request ->user_name
        ]);
            return "Record created";
    }
    public function get($email_address, $pass_word,  $user_name)
    {
        $registration = Registration::find($email_address, $pass_word, $user_name)->toArray();
        return response()->json($registration);
    }
}
