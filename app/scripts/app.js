'use strict';

/**
 * @ngdoc overview
 * @name angularJsDemoCodeApp
 * @description
 * # angularJsDemoCodeApp
 *
 * Main module of the application.
 */
var myApp = angular.module('angularJsDemoCodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Home Page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        title: 'About Page',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todo', {
        title: 'List Page',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// change Page Title based on the routers
myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
