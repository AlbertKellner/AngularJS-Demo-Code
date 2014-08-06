'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
