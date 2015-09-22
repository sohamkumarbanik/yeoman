'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanApp
 */
angular.module('yeomanApp')
.controller('MainCtrl', function ($scope, localStorageService) {
	var todosInStore = localStorageService.get('todos');

	$scope.todos = todosInStore || [];

	$scope.$watch('todos', function () {
  		localStorageService.set('todos', $scope.todos);
	}, true);

	$scope.addTodo = function () {
		if ($scope.todo !== null) {
		  $scope.todos.push($scope.todo);
		  $scope.todo = '';
		}
	};

	$scope.removeTodo = function (index) {
  		$scope.todos.splice(index, 1);
	};


});
