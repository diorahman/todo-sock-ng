function todolist_controller($scope) {
	$scope.todos = [
		{text: "This is the first todo with angular", done:true},
		{text: "This is the second todo with angular", done:false},
		{text: "This is the third todo with angular", done:false},
	];

	$scope.add_todo = function() {
		$scope.todos.push({text:$scope.todo_text, done:false});
		$scope.todo_text = '';
	}

	$scope.show_close_button = function() {
		var found = false;
		var idx = 0;
		while (!found && idx < $scope.todos.length) {
			if (!$scope.todos[idx].done) {
				found = true;
			}

			idx++;
		}

		if (!found) {
			angular.element("#btn-close").removeAttr('disabled');
		} else {
			angular.element("#btn-close").attr('disabled', '');
		}
	}
}