'use strict';

angular.module('myApp.historico', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/historico', {
    templateUrl: 'historico/historico.html',
    controller: 'HistoricoCtrl'
  });
}])

.controller('HistoricoCtrl', [function() {

}]);
