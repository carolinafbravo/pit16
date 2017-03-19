'use strict';

angular.module('myApp.reservar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/reservar', {
    templateUrl: 'reservar/reservar.html',
    controller: 'ReservarCtrl'
  });
}])

.controller('ReservarCtrl', [function() {

}]);
