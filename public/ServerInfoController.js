
angular.module('ServerInfoController', ['AlertService'])
//AMail.controller('ServerInfoController', serverInfoController);
	.controller('ServerInfoController', function($scope, $http, Alert) {


		$scope.alertExist = false;
		$scope.serverAlert = {};

		// Dummy alerts. Should be recovered by the server.
		/*
		$scope.serverAlert = {
			info: {title: "Welcome, motherfucker!", body: "It's a pleasure..."},
			//warning: {title: 'A warning', body: 'It\'s a pleasure...'},
			//danger: {title: 'An urgent matter goes here', body: 'a pleasure...'}

		};
		*/



		// Load the alerts from the server
		var alerts = Alert.get('/api/alerts')
			.success(function(data, status, headers, config) {
				$scope.serverAlert = data;
				$scope.alertExist = true;
				

				// define respective alerts
				for (var i = 0; i < data.length; i++) {
					switch(data[i].type){
						case 'info':
							$scope.serverAlert.info = data[i];
							break;

						case 'warning':
							$scope.serverAlert.warning = data[i];
							break;

						case 'danger':
							$scope.serverAlert.danger = data[i];
							break;

						default: // something went wrong
							$scope.serverAlert = {};

					}
				}

				//console.log(data[0].type);
				


			})
			.error(function(data, status, headers, config) {
				// Need to do some?

			});





		// Once we know there is some alerts, we enable the view
		

		// comunicate the server the alert has been visualized


	});


