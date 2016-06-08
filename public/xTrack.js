
var xTrack = angular.module('xTrack', ['ngRoute', 'ngResource', 'MessageService', 'ServerInfoController', 'ItemService', 'OpResultMessagesService']);


xTrack.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: MainController,
			templateUrl: 'pages/expenses.html'
		})
		
		.when ('/404', {
			controller: PageNotFoundController,
			templateUrl: 'pages/404.html'
		})

		.when ('/compose', {
			controller: newItemController,
			templateUrl: 'pages/newItemForm.html'
		})
		.otherwise({
			redirectTo: '/'
		});

});










// Operations on items.
function setCalculations(scopeItems) {
	console.log(scopeItems);
		console.log(scopeItems.length);

	// TODO: 
	// Update single item.
	/*
	if (scopeItems.length == 1) {
		scopeItems[i].total = scopeItems[i].price * scopeItems[i].quantity;
		return;
	}
	*/

	
	// Update the whole item list.
	for (var i = 0; i < scopeItems.length; i++) {
		scopeItems[i].total = scopeItems[i].price * scopeItems[i].quantity; 
	}

}

