// mainCtrl.js

angular.module('mainCtrl', [])

// inject the comment service into our controller
.controller('mainCtrl', function($scope, $http, Comment){
	// comment form data
	$scope.commentData= {};

	$scope.loading = true; // spinning loading icon

	// Get all the comments
	Comment.get()
		.success(function(data){
			$scope.comments = data;
			$scope.loading = false;
		});

	// Save a comment
	$scope.submitComment = function(){
		$scope.loading = true;

		Comment.save($scope.commentData)
			.success(function(data){

				// clean up the array
				$scope.commentData = {};

				// refresh comment list
				Comment.get()
					.success(function(newData){
						$scope.comments = newData;
						$scope.loading = false;

					});

					


			})

			.error(function(errorData){
				console.log(errorData);
			});


	};
	

	// Delete a comment
	$scope.deleteComment = function(id){
		$scope.loading	 = true;

		Comment.destroy(id)
			.success(function(data){

				// refresh the comment list
				Comment.get()
					.success(function(newData){
						$scope.comments = newData;
						$scope.loading = false;

					});
			});

	};


});
