var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var allPlayers;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  console.log(game.getState());
}


function draw(){
  if(playerCount === 4){
    console.log("hi");
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
