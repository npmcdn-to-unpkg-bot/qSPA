<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Setup Blade
Blade::setContentTags('<%', '%>');        // for variables and all things Blade
Blade::setEscapedContentTags('<%%', '%%>');   // for escaped data




Route::get('/', function () {
    return view('index');
});


// API routes
Route::group(['prefix' => 'api'], function(){
	Route::resource('comment', 'CommentController',
		['only' => ['index', 'store', 'destroy']]);

	Route::resource('mail', 'MailController',
		['only' => ['index', 'show', 'store', 'update', 'destroy']]);

	Route::resource('alerts', 'AlertController',
		['only' => ['index']]);

});


// RESTful xTrack
Route::group(['prefix' => 'xtrack/api'], function(){
	Route::resource('items', 'ItemController',
		['only' => ['index', 'show', 'store', 'update', 'destroy']]);

	Route::resource('mail', 'MailController',
		['only' => ['index', 'show', 'store', 'update', 'destroy']]);

	Route::resource('alerts', 'AlertController',
		['only' => ['index']]);

	Route::get('paginatedItems', 'PaginatedItemController@index');
});


Route::get('users/{id}/friends', function($id) {
	return ('Some friends go here.');
});


Route::get('users/{id?}', function ($id = 'fallbackId') {
//
	return $id;
});


// This won't execute.
Route::get('users/{id}', function (
	//Application $injectedApp,
	$actualRouteId,
	Request $injectedReq) {
	// do some
	return ('some shit');
});


// Example 3-7
Route::get('uttente/{id}', function ($id) {
	return 'Uttente n.: ' . $id;
})->where('id', '[0-9]+');

Route::get('users/{username}', function ($username) {
	return 'Username: ' . $username;
})->where('username', '[A-Za-z]+');

Route::get('posts/{id}/{slug}', function ($id, $slug) {
	return 'Post: '. $id . ', slug: ' . $slug;
})->where(['id' => '[0-9]+', 'slug' => '[A-Za-z]+']);

Route::any('users', function() {
	return 'Error: 404. Page not found\n';
});


Route::get('members/{id}', [
	'as' => 'members.show',
	'uses' => 'MembersController@show'
	]);





/*

App::missing(function($exception){
	//return view('index');
	return view('welcome');

});
*/