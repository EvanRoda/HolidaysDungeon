var app = angular.module('app', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/village.html',
            controller: 'VillageCtrl'
        })
        .when('/dungeon', {
            templateUrl: 'templates/dungeon.html',
            controller: 'DungeonCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);