var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1;

var track, car1_img, car2_img,car3_img,car4_img,rockimg;

function preload(){
  track = loadImage("image/track.png");
  car1_img = loadImage("image/car1.png");
  car2_img = loadImage("image/car2.png");
  car3_img = loadImage("image/car3.png");
  car4_img = loadImage("image/car4.png");
  rockimg=loadImage("image/rock.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}