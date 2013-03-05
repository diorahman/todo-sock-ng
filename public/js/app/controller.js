function todolist_controller($scope) {
	$scope.todos = [];

	$scope.add_todo = function() {
		$scope.todos.push({text:$scope.todo_text, done:false});
		$scope.todo_text = '';
	}
}