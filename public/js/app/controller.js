function todolist_controller($scope) {
	$scope.todos = [
		{text: "This is the first todo with angular", done:true},
		{text: "This is the second todo with angular", done:false},
		{text: "This is the third todo with angular", done:false},
	];

	$scope.not_finish = true;

	$scope.add_todo = function() {
		$scope.todos.push({text:$scope.todo_text, done:false});
		$scope.todo_text = '';
	}

	$scope.show_close_button = function() {
		angular.forEach($scope.todos, function(todo) {
			if (todo.done) {
				$scope.not_finish = false;
			} else {
				$scope.not_finish = true;
			}
		});

		if (!$scope.not_finish) {
			angular.element("#btn-close").removeAttr('disabled');
		} else {
			angular.element("#btn-close").attr('disabled', '');
		}
	}
}