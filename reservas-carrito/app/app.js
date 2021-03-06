'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.date',
  'myApp.inicio',
  'myApp.registrarse',
  'myApp.login',
  'myApp.home',
  'myApp.reservar',
  'myApp.historico',
  'myApp.contactar',
  'myApp.admin-home',
  'myApp.admin-reservas',
  'myApp.admin-usuarios'
]);


config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/inicio'});
}]);
