'use strict';


// Declare app level module which depends on filters, and services
angular.module('hmmApp', [
  'ngRoute',
  'hmmApp.filters',
  'hmmApp.services',
  'hmmApp.directives',
  'hmmApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/map', {templateUrl: 'partials/map.html', controller: 'MapCtrl'});
  $routeProvider.otherwise({redirectTo: '/map'});
}]);
