'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('LoginCtrl', function ($scope, Data) {
		console.log(Data.token);
		Data.token = 'I am token';
		console.log(Data.token);
		$scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
