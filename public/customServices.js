// @return false if error, true otherwise
			function sendMsg(msg, $http) {
				//return true; 
				var config = {params: msg};

				$http.post('localhost:8000/api/mail', {
					headers: {'Content-Type': 'Application/json'},
					params: msg
				})
				.success(function(data, status, headers, config ) {
					console.log("Status: " + status);
					console.log("Headers: " + headers);
					return true;
				})
				.error(function(data, status, headers, config) {
					console.log("Error occurred: " + status);
					console.log(data);
				});
			}


/*
// @return false if error, true otherwise
			function sendMsg(msg, $http) {
				
				
				//var config = {headers: "Content-Type: application/json"};
				var config = {headers: 'application/x-www-form-urlencoded'}
				//var postData = {params: msg};
				var postData = {params: $.param(msg)};
				//console.log (config);
				//console.log(postData);


				//return true; 

				$http.post('/api/mail', config, postData)
				.success(function(data, status, headers, config ) {
					console.log("Status: " + status);
					console.log("Headers: " + status);
					return true;
				})
				.error(function(data, status, headers, config) {
					console.log("Error occurred: " + status);
					//console.log(data);
				});
			} 
*/