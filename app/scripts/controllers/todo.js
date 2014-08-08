'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('TodoCtrl', function ($scope) {

    $scope.todos = [
      {text:'learn angular', due:'2014-08-12', done:true},
      {text:'build an angular app', due:'2014-08-12', done:false}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = ''; 
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) { // please add this "{", or jsLint will report error in grunt
        	$scope.todos.push(todo);
        }
      });
    };
  });
