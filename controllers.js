app.controller('VillageCtrl', ['$scope', '$rootScope', 'Hero', 'Chest', function($scope, $rootScope, Hero, Chest){
    console.log('Village!');
    console.log('Hero', Hero);
    //Hero.count = !Hero.count ? 1 : Hero.count + 1;
}]);

app.controller('DungeonCtrl', ['$scope', '$http', function($scope, $http){
    console.log('Maaaaaap!');

    $scope.goToDungeon = function(place){};
}]);