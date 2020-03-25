<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function index()
    {
       $user = User::orderBy("id","DESC")->paginate(5);
       return view('User.index', ['user'=>$user]);

    }

    public function create()
    {
        return view('User.create');
    }
    public function store(Request $request)
    {
        $user =User::create($request->all());
        $user->syncRoles($request->get('permisson'));
        return response()->json($user, 201);
    }

    public function show($id)
    {
        
    }
    public function edit($id)
    {
        $user = User::find($id);
        return response()->json(null);
    }

    public function update(Request $request, $id)
    {
        $user->update($request->all());
        $user->save();
        $user->syncRoles($request->get('permission'));
        return respone()->json($user);
    }

  
    public function destroy($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json(null);
    }
}
