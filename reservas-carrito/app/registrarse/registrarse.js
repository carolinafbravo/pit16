'use strict';

angular.module('myApp.registrarse', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/registrarse', {
    templateUrl: 'registrarse/registrarse.html',
    controller: 'RegistrarseCtrl'
  });
}])

.controller('RegistrarseCtrl', [function() {

}]);
