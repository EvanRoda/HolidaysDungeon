function rand(min, max){
    if(!max){
        max = min;
        min = 0;
    }
    max += 1; //Чтобы запрошенное max было включительно
    return Math.floor(Math.random() * (max - min)) + min;
}

function prob(percent){
    var dice = rand(1, 100);
    return percent > dice;
}