<?php

namespace App\Http\Controllers;

use App\Models\User;
use Validator;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class UserController extends Controller
{

    // public function __construct(){
    //     $this->middleware('auth:api',['except'=>['login','register']]);
    // }

        /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'position' => 'required',
            'active_status' => 'required',
            'employee_id' => 'required|integer|min:6',
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed|min:6',
            'sex' => 'required',
            'birthday' => 'required|date',
            'age' => 'required|integer',
            'profile_picture' => 'required|image:10240', // 10MB in kilobytes
        ], [
            'profile_picture.required' => 'The profile picture is required.'
        ]);
        
        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()], 400);
        }

         // Create a new user instance
         $user = new User([
            'position' => $request->position,
            'active_status' => $request->active_status,
            'employee_id' => $request->employee_id,
            'first_name' => $request->first_name,
            'middle_name' => $request->middle_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'sex' => $request->sex,
            'birthday' => $request->birthday,
            'age' => $request->age,
            'profile_picture' => $request->profile_picture,
        ]);

        // Handle profile and validID file uploads
        $profilePath = $request->file('profile_picture')->store('profiles', 'public');

        // Assign file paths to user model
        $user->profile_picture = '/storage/' . $profilePath;
        $user->save();

        // Generate token
        $token = JWTAuth::fromUser($user);

        return response()->json([
            "status" => 1,
            "message" => "User registered successfully",
            "user" => $user,
            "token" => $token
        ], 200);
    }


    
    public function login(Request $request)
    {
        $credentials = $request->only('employee_id', 'password', 'position');

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    "status" => "error",
                    "message" => "Invalid credentials"
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        // Retrieve the authenticated user
        $user = Auth::user();

        // Set the token as a cookie in the response
        // $cookie = Cookie::make('token', $token, 1); // Token expires in 2 minutes
        $cookie = Cookie::make('token', $token, 60 * 24 * 3);

        // Include user's ID in the token payload
        $token = JWTAuth::fromUser($user);

        return response()->json([
            "user" => $user,
            "message" => "Login successfully",
            'token' => $token
        ])->withCookie($cookie);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        try {
            // Retrieve the authenticated user
            $user = Auth::user();
    
            // Check if the user exists
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
    
            // Return the user data
            return response()->json(['user' => $user]);
        } catch (TokenExpiredException $e) {
            return response()->json(['message' => 'Token is expired'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['message' => 'Token is invalid'], 401);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token not found'], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json(['error' => 'user not found'], 404);
        }

        $user->update($request->all());
        
        if ($request->hasFile('profile_picture')) {
            $profilePath = $request->file('profile_picture')->store('profiles', 'public');
            $user->profile_picture = '/storage/' . $profilePath;
            
        }
        $user->save();

        return response()->json([
            "status" => 1,
            "message" => "User updated successfully",
            "user" => $user
        ], 200);
    }

    public function logout(Request $request)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (TokenExpiredException $e) {
            return response()->json(['message' => 'Token is expired'], 401);
        } catch (TokenInvalidException $e) {
            return response()->json(['message' => 'Token is invalid'], 401);
        } catch (JWTException $e) {
            return response()->json(['message' => 'Token not found'], 500);
        }
    
        if ($user) {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json(['message' => 'Successfully logged out']);
        } else {
            return response()->json(['error' => 'Could not log out']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['message' => 'User deleted successfully']);
    }


}
