'use strict';

angular.module('myApp.admin-home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin-home', {
    templateUrl: 'admin-home/admin-home.html',
    controller: 'AdminHomeCtrl'
  });
}])

.controller('AdminHomeCtrl', [function() {

}]);
