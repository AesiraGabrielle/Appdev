<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BatchModel;
use Validator;

class BatchInOutController extends Controller
{
    public function index()
    {
        $batchinout = BatchModel::all();
        return response()->json($batchinout);
    }

    public function store(Request $request)
    { 
        $validator = Validator::make($request->all(), [
            'employee_id' => 'required',
            'item_name' => 'required',
            'recieved_date' => 'required',
            'quantity' => 'required|integer',
            'batchInOut' => 'required',
            'description' => 'required',
            'batch_info' => 'required',
            'logo' => 'required|image:10240',
        ], [
            'logo.required' => 'The profile picture is required.'
        ]);

        if ($validator->fails()) {
            return response()->json(["error" => $validator->errors()], 400);
        }

        $batchinout = new BatchModel([
            'employee_id' => $request->employee_id,
            'item_name' => $request->item_name,
            'recieved_date' => $request->recieved_date,
            'quantity' => $request->quantity,
            'batchInOut' => $request->batchInOut,
            'description' => $request->description,
            'batch_info' => $request->batch_info,
            'logo' => $request->logo,
        ]);

        // Handle profile and validID file uploads
        $profilePath = $request->file('logo')->store('logo', 'public');

        // Assign file paths to user model
        $batchinout->logo = '/storage/' . $profilePath;
        $batchinout->save();

        return response()->json([
            "status" => 1,
            "message" => "Batch successfully added",
            "user" => $batchinout,
        ], 200);

    }
    
}
