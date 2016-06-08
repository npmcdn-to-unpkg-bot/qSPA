

function newItemController($scope, $routeParams, $http, Item, OpResultMessages) {
	
	var API_URL = '/xtrack/api/items/';
	// Sent a message
	$scope.error = {};


	$scope.createItem = function() {
		//$scope.newItem = {}; // Wrong: This is blanking out the model!
		
		


		
		


		var item = {
			description: $scope.newItem.description,
			price: $scope.newItem.price,
			quantity: $scope.newItem.quantity
		};
		//console.log(item);


		// do some validation here
		if (!validateInput($scope.newItem)) {
			$scope.error.inputError = {
				title: 'Invalid values',
				description: 'The values introduced are not valid. Please, ...'

			};

			return false;
		}


		console.log	("createItem() ");
		console.log($scope.newItem);


		Item.save(API_URL, item)
			.success(function(data, status, headers, config) {
				
				//showSuccessMessage("Item created successfully!");
				OpResultMessages.success("Item created!");
				// Redirect here.
			})
			.error(function(data, status, headers, config) {
				OpResultMessages.error(status);
			});

	};
	



}

/* 
 * Validate new item input.
 */
function validateInput(newItem) {
	if ((newItem.description == null) ||
		(newItem.price <= 0) ||
		(newItem.quantity <= 0) ||
		(newItem.price == null) ||
		(newItem.quantity == null)) {
		return false;
	}

	// TODO: Add more validation.

	return true;
}