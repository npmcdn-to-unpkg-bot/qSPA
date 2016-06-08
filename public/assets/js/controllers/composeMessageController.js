
function ComposeMessageController($scope, $routeParams, $http, Message) {
	
	var API_URL = '/api/mail/';
	// Sent a message
	
	$scope.sendMessage = function() {
		
		// do some validation here

		// compose the message
		var msg = composeMsg($scope.message);
		console.log	($scope.message);


		Message.save(API_URL, msg)
			.success(function(data, status, headers, config) {
				console.log	("sent");
			})
			.error(function(data, status, headers, config) {
				console.log	("error: " + status);
			});

	};
	





	// Compose the final message 
	function composeMsg(userInput) {
		var currentDate = new Date();

		
		var msgScheletrum = {
			sender: userInput.sender,
			subject: userInput.subject,
			date: currentDate,
			recipients: userInput.recipients,
			message: userInput.message
		};
		

		// do some more instead of passing just the scheletrum

		//return true;
		return msgScheletrum;


	}


}