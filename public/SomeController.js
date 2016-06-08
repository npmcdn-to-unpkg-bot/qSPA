
function SomeController ($scope) {
	$scope.message = {text: 'nothing clicked yet'};

	$scope.clickUnfocused = function() {
		$scope.message.text = "Unfocused button clicked";
	}

	$scope.clickFocused = function() {
		$scope.message.text = "Focused button clicked";
	}
}