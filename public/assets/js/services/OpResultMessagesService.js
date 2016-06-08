angular.module('OpResultMessagesService', [])
				.factory('OpResultMessages', function() {
					return {

						// get all messages
						success: function(msg){
							return console.log("Success: " + msg);
							//return showSuccessModal("Success: " + msg);
						}, 
						error : function(msg) {
							return console.log	("error: " + msg);
						}

						
					}



				});