var dungeonTypes = {
    forest: {
        enemies: [
            {name: 'wolf', title: 'Wolf', baseHP: 1, baseDM: 1},
            {name: 'rogue', title: 'Rogue', baseHP: 1, baseDM: 2},
            {name: 'ent', title: 'Ent', baseHP: 2, baseDM: 1}
        ],
        resources: [
            {name: 'wood', title: 'Log', baseCount: 1}
        ]
    },
    cave: {
        enemies: [
            {name: 'rat', title: 'Rat', baseHP: 1, baseDM: 1},
            {name: 'spider', title: 'Spider', baseHP: 1, baseDM: 2},
            {name: 'zombie', title: 'Zombie', baseHP: 2, baseDM: 1}
        ],
        resources: [
            {name: 'stone', title: 'Stone', baseCount: 1},
            {name: 'iron', title: 'Iron', baseCount: 1}
        ]
    },
    tower: {
        enemies: [
            {name: 'rat', title: 'Rat', baseHP: 2, baseDM: 2},
            {name: 'spider', title: 'Spider', baseHP: 4, baseDM: 3},
            {name: 'magician', title: 'Magician', baseHP: 4, baseDM: 6}
        ],
        resources: [
            {name: 'gold', title: 'Gold', baseCount: 1}
        ]
    }
};

var altarTypes = {

};

function generateDungeon(type, layer, hero_level){
    var map = clearMap();

    map = doors(map, type);
    map = resources(map, type, layer);
    map = enemies(map, type, layer);

    return map;
}

function clearMap(){
    var map = [];
    for(var y=0; y<7; y++){
        for(var x=0; x<5; x++){
            map[y][x] = [];
        }
    }
    return map;
}

function walls(map){
    return map;
}

function doors(map, type){
    var start = {type: 'start'},
        exit = {type: 'exit', status: true},
        key = {type: 'key'};

    if(type == 'tower'){
        exit.status = false;
        map[rand(1, 6)][rand(4)].unshift(key);
    }

    map[0][rand(4)].unshift(start);
    map[6][rand(4)].unshift(exit);

    return map;
}

function resources(map, type, layer){
    var count = rand(1, 5),
        forbiddenTypes = ['start', 'exit', 'key'],
        x, y, r;

    for(var i = 0; i < count; i++){
        x = rand(4);
        y = rand(6);
        r = generateResource(type, layer);
        if(!map[y][x].length || forbiddenTypes.indexOf(map[y][x][0].type) == -1){
            map[y][x].unshift(r);
        }else{
            i--;
        }
    }

    return map;
}

function generateResource(type, layer){
    var base = dungeonTypes[type].resources[rand(dungeonTypes[type].resources.length - 1)];
    var res = {
        type: 'resource',
        name: base.name,
        title: base.title,
        count: rand(base.baseCount, base.baseCount + layer)
    };

    return res;
}

function enemies(map, type, layer){
    var count = rand(5, 15),
        forbiddenTypes = ['start', 'exit', 'enemy'],
        x, y, e;

    for(var i = 0; i < count; i++){
        x = rand(4);
        y = rand(6);
        e = generateEnemy(type, layer);
        if(!map[y][x].length || forbiddenTypes.indexOf(map[y][x][0].type) == -1){
            map[y][x].unshift(e);
        }else{
            i--;
        }
    }

    return map;
}

function generateEnemy(type, layer){
    var base = dungeonTypes[type].enemies[rand(dungeonTypes[type].enemies.length - 1)];
    var enemy = {
        type: 'enemy',
        name: base.name,
        title: base.title,
        hp: rand((base.baseHP + layer)/2, base.baseHP + layer + ((base.baseHP + layer)/2)),
        dm: rand((base.baseDM + (1.5*layer))/2, base.baseHP + (1.5*layer) + ((base.baseHP + (1.5*layer))/2)),
        hard: prob(10),
        strong: prob(10)
    };

    if(enemy.hard){
        enemy.hp *= 2;
    }

    if(enemy.strong){
        enemy.dm *= 2;
    }

    return enemy;
}

