
function MainController($scope, $http, Item) {

	var API_URL = '/xtrack/api/items/';
	$scope.error = {};
	$scope.error.loading = false;
	//$scope.items = {}; // does not work without this

	$scope.edit = {};
	$scope.currentItem = {};
	$scope.error.inputError = {}; // No error yet.


	


	$scope.editItem = function (id) {
		$scope.currentItem.id = id; // Make the id visible 
		console.log($scope.currentItem.id);

		

		showEditModal(id);

		//console.log($scope.edit);

		// check whather it was all good or not

	};


	// This should work with an ID parameter instead.
	// --Done.
	$scope.saveItemChanges = function(id) {
		console.log("Saving: " + $scope.edit);
		var url = API_URL + id;


		Item.patch(url, $scope.edit)
			.success(function(data, status, headers, config) {
				console.log("Item saved");
				//$scope.items.
				$scope.updateItem(id, $scope.getItemIndex(id));
				console.log("Item Index: " + $scope.getItemIndex(id));
			})
			.error(function(data, status, headers, config) {
				console.log("Shit");
			});

	};
	

	


	

	
	/*
	 * Retrieve Item list.
	 */
	Item.get(API_URL)
		.success(function(data, status, headers, config) {
			$scope.items = data;
			//console.log(data.length);
			setCalculations($scope.items);
			//console.log(data);


		})
		.error(function(data, status, headers, config) {
			$scope.error.loading = true;
			// define a more accurate error description

		});


	/*
	 * Remove an item from the list held locally (view).
	 *
	 * This works only if the Items are sequential.
	 */
	$scope.removeItemFromScope = function(id) {
		// determinate the position respect to the first id
		var indexFirstItem = 0;
		var indexItemInArray = 0;

		if ($scope.items[0].id) {
			indexFirstItem = $scope.items[0].id;
			indexItemInArray = id - indexFirstItem;


			//console.log("items[i]: " + indexItemInArray);
			$scope.items.splice(indexItemInArray, 1);
		} else {
			// We shouldn't get to this point if the id didn't exist. 
			//
		}

	};


	/* 
	 * Remove an Item from the list.
	 */	
	$scope.deleteItem = function(id) {
		console.log("Deleting item with id: " + id);

		Item.destroy(API_URL, id)
			.success(function(data, status, headers, config) {
				console.log("Success: Item removed from list.");
				//console.log(data);
				$scope.removeItemFromScope(id);

			})
			.error(function(data, status, headers, config) {
				// handle it property. For now, just add some basic stuff.
				//displayErrorMessage("Can't remove item from list.");
				console.log("Can't remove item from list.");
				console.log(data);



			});
	};

	
	// determinate the position respect to the first id
	$scope.getItemIndex = function(id) {
		
		var indexFirstItem = 0;
		var indexItemInArray = 0;

		/*
		if ($scope.items[0].id) {
			indexFirstItem = $scope.items[0].id;
			indexItemInArray = id - indexFirstItem;

			
		}
		
		*/

		// Search for the item.
		for (var i = indexFirstItem; i < $scope.items.length; i++) {
			if ($scope.items[i].id == id) {
				indexItemInArray = i;
			}
		}

		return indexItemInArray;

	};


	/* 
	 * Update single item view after changes. 
	 */
	$scope.updateItem = function(id, itemIndex) {
		Item.get(API_URL + id)
			.success(function(data, status, headers, config) {
				$scope.items[itemIndex] = data;
				setCalculations($scope.items);
			});
			// no error handling here
	}

	

};

