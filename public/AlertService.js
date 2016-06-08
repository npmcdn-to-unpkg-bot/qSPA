
// Admin notifications, important stuff, etc.

angular.module('AlertService', [])
				.factory('Alert', function($http) {
					return {

						// get all messages
						get: function(url){
							return $http.get(url);
						}

						
					}



				});