'use strict';

			

		//testApp.controller('mainController', 
	angular.module('mainController', [])
		.controller('mainController', 
			function ($scope, $http, Message) {
			
				$scope.submit = function() { // form submission
					
					var msg = composeMsg($scope.message);
					console.log(msg);

					if (msg == null) {
						console.log("error: invalid message");

					} else { // all good, send it
						if (!sendMsg(msg)) { // error sending msg
							console.log("error: can't send msg");
						} else { // all good, do something rewarding for the user here
							console.log("success: message sent!");
							console.log(msg);
						}
					}

				}
			



				// Compose the resulting JSON message
				// @return null is error, Obj otherwise
				function composeMsg(bodyElements) {
					// data validation
					var requiredFields = ['recipients', 'message'];
					//console.log(requiredFields);
					//console.log(bodyElements);
					
					/*
					if requiredIsNull(bodyElements, requiredFields) {
						console.log("error: required fields are missing from the message");
						return null;

					}*/
					

					// composition
					var msg = { 
							sender: bodyElements.sender,
							subject: bodyElements.subject,
							date: getFormatedDate(),
							recipients: bodyElements.recipients,
							message: bodyElements.message
						};

					return msg;

				}

				function getFormatedDate() {
					var date = new Date();

					// do some sort of formatting
					return date;
				}


				

				function sendMsg(msg) {
					console.log	();

					Message.save(msg)
						.success(function(data, status, config, headers) {
							console.log	("success: " + status);
							

						})
						.error(function(data, status, config, headers) {
							console.log	("Error: " + status);
							return false;
						});

					return true;
				}


				function requiredIsNull(testObject, requiredFields) {
					return false; // fields missing
				}






		});

			


			


			
