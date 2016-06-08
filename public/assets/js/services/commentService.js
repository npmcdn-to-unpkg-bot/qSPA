// commentService.js

angular.module('commentService', [])
.factory('Comment', function($http, CSRF_TOKEN){
	//$http.defaults.headers.common['X-Csrf-Token'] = CSRF_TOKEN;

	return {

		// get all comments
		get: function(){
			return $http.get('/api/comment');
		}, 

		// save a comment
		save: function(commentData){
			
			//commentData._token = CSRF_TOKEN;
			
			//console.log(commentData);
			

			return $http({
				method: 	'POST',
				url: 		'/api/comment',
				headers: 	{ 'Content-Type' : 'application/x-www-form-urlencoded' },
				data: 		$.param(commentData)
				/*
				data: 		{
							comment: commentData.text,
							_token: commentData._token,
							author: 	commentData.author

							}, */


			});
		},

		// destroy a comment
		destroy: function(id){
			return $http.delete('/api/comment/' + id);
		}
	}

});
