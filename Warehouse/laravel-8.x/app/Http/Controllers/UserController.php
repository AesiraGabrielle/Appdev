<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function index ()
    {
        $users = User::all()->toArray();
        return response()->json($users);

    }
    public function create(Request $request)
{
    User::create([
        "name"=> $request->name,
        "email" => $request->email,
        "password" => bcrypt($request->password),
    ]);
    return "Record created";
}

    public function get($id)
    {
        $users = User::find($id)->toArray();
        return response()->json($users);
    }
    public function delete($id)
    {
        User::find($id)->delete();
        return "Record deleted";
    }

}
