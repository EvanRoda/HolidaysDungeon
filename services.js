app.factory('Hero', ['$localStorage', function($localStorage) {
    if(!$localStorage.hero){
        $localStorage.hero = {
            name: 'Evan',
            hp: [10, 10],
            mp: [0, 0]
        };
    }

    return $localStorage.hero;
}]);

app.factory('Chest', ['$localStorage', function($localStorage){
    if(!$localStorage.chest){
        $localStorage.chest = {
            wood: 0,
            stone: 0,
            iron: 0,
            gold: 0
        };
    }

    return $localStorage.chest;
}]);