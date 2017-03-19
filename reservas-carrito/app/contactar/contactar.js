'use strict';

angular.module('myApp.contactar', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactar', {
    templateUrl: 'contactar/contactar.html',
    controller: 'ContactarCtrl'
  });
}])

.controller('ContactarCtrl', [function() {

}]);
