angular.module('MessageService', [])
				.factory('Message', function($http) {
					return {

						// get all messages
						get: function(url){
							return $http.get(url);
						}, 

						// save a message
						save: function(url, msg){
							
							//commentData._token = CSRF_TOKEN;
							
							//console.log(commentData);
							

							return $http({
								method: 	'POST',
								url: 		url,
								headers: 	{ 'Content-Type' : 'application/json' },
								//data: 		$.param(commentData)
								data: 		msg
								/*
								data: 		{
											comment: commentData.text,
											_token: commentData._token,
											author: 	commentData.author

											}, */


							});
						},

						// destroy a message
						destroy: function(url, id){
							return $http.delete(url + id);
						}
					}



				});