'use strict';

angular.module('myApp.admin-usuarios', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin-usuarios', {
    templateUrl: 'admin-usuarios/admin-usuarios.html',
    controller: 'AdminUsuariosCtrl'
  });
}])

.controller('AdminUsuariosCtrl', [function() {

}]);
