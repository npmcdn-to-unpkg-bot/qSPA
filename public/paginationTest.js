
var paginationTest = angular.module('paginationTest', ['ngRoute', 'ngResource', 'ItemService']);


paginationTest.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: MainController,
			templateUrl: 'pages/pagination.html'
		})
		
		
		.otherwise({
			redirectTo: '/'
		});

});


function MainController($scope, Item) {
	// get motherfucker data
	var url = '/xtrack/api/paginatedItems';

	// Page basic structure.
	//$scope.pages = {};

	Item.get(url)
		.success(function(data, status, headers, config) {
			//for (var i = 0; i = data.length)
			//$scope.items = data;
			$scope.pages = data;
			
			$scope.pages.total = $scope.pages.last_page;
			console.log($scope.pages.total);


			console.log(data);

		})
		.error(function(data, status, headers, config) {
			console.log("fuck no");
		})


}








