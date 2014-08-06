'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
