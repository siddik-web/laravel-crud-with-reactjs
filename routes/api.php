<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::resource('posts', 'PostController');

/*getAllPosts : () => axios.get(`${BASE_API_URL}/posts`),
getPost: (id) => axios.get(`${BASE_API_URL}/posts/${id}/edit`),
addPost: (post) => axios.post(`${BASE_API_URL}/posts/`, post),
updatePost: (post,id) => axios.put(`${BASE_API_URL}/posts/${id}`, post),
deletePost: (id) => axios.delete(`${BASE_API_URL}/posts/${id}`),*/

Route::get('/posts', 'PostController@index');
Route::post('/posts/{id}/edit', 'PostController@edit');
Route::put('/posts/{id}', 'PostController@update');
Route::delete('/posts/{id}', 'PostController@destroy');
