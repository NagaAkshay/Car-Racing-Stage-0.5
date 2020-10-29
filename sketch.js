var gameState = 0;
var playerCount;
var dataBase;
var form, player, game;

function setup() {
    createCanvas(400, 400);

    dataBase = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw() {
    
}