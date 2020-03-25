<?php

use Illuminate\Http\Request;
use App\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users',function(){
    return User::all();
});

Route::post('/store', function(Request $request){
    return User::create($request->all());
});
Route::delete('/users/delete{id}', function($id){
    return User::destroy($id);
});
Route::put('/users/update/{id}', function(Request $request, $id){
    $user = User::findOrFail($id);
    $user->update($request->all());
    return $user;
});
Route::get('/users/edit/{id}',function($id){
    return  User::find($id);
});