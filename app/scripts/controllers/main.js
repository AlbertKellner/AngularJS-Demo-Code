'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    // To add to local storage
    localStorageService.set('key','Zhou Hao Value');
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
