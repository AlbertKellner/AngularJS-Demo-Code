'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('AboutCtrl', function ($scope, localStorageService) {
    console.log(1);
    console.log(localStorageService.get('key'));
    console.log(2);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
