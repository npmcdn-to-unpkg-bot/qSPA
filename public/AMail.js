
var AMail = angular.module('AMail', ['ngRoute', 'ngResource', 'MessageService', 'ServerInfoController']);


AMail.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: MainController,
			templateUrl: 'pages/mail-list.html'
		})
		.when ('/message/:id', {
			controller: DetailController,
			templateUrl: 'pages/message.html'
		})
		.when ('/404', {
			controller: PageNotFoundController,
			templateUrl: 'pages/404.html'
		})
		.when ('/compose', {
			controller: ComposeMessageController,
			templateUrl: 'pages/compose.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});



/*
var MainController = AMail.controller('MainController', ['$scope, $http', function($scope, $http) {
	
	
}]); 
*/

/*
angular.js:13424 Error: [ng:areq] Argument 'fn' is not a function, got Object
---
Corrected with a function declaration
*/

function MainController($scope, $http, Message) {
	/* 
	$http.get('http://localhost:8000/api/mail')
		.success(function(data, status, headers, config) {
			$scope.messages = data;
			//$scope.lastMessage = $scope.messages.length; --undefined


		});
		*/

	//$scope.messages = {};
	$scope.error = {};
	$scope.error.loading = false;

	var url = '/api/mail/';
	Message.get(url)
		.success(function(data, status, headers, config) {
			$scope.messages = data;

		})
		.error(function(data, status, headers, config) {
			$scope.error.loading = true;
			// define a more accurate error description

		});

};


/*
AMail.factory('Comment', ['ngResource', '$http', function($http) {
	// do
}]); */



function DetailController ($scope, $http, $routeParams, Message) {
	$http.get('http://localhost:8000/api/mail/' + $routeParams.id)
		.success(function(data, status, headers, config) {
			//console.log(data);
			$scope.message = data;
			console.log($scope.message);
			//console.log($scope.lastMessage);
			
		})
		.error(function(data, status, headers, config) {
			//$scope.message = "";
		});


	

} 
	


// 404
function PageNotFoundController() {

}


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

