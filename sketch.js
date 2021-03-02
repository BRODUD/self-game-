var bg,earth;
var database;
var airplane;
var gameState = 0;
var playerCount = 0;
var form;
var airplaneimg;
var airplane1,airplane2;
var right,left;
var game;
var loadingimg;
var loading;
var player;
var laser;
var laserimg;
function preload() {
  bg = loadImage("bg.png");
  earth = loadImage("earth.png");
  airplaneimg = loadImage("airplane.png");
  right = loadImage("airplane3.png");
  left = loadImage("airplane2.png");
  loadingimg = loadImage("LOADING.gif");
  laserimg = loadImage("redlaser.png");
}
function setup() {
  database = firebase.database();
  createCanvas(windowWidth,windowHeight);
  earthimg = createSprite(windowWidth-700,windowHeight+200);
 earthimg.addImage(earth);
 earthimg.scale = 1.2
 game = new Game();
 game.start();
 if (gameState===1){
  loading = createSprite(windowWidth-400,windowWidth-300);
  loading.addImage(loadingimg);
}
}
function draw() {
  background("white");  
  
  
  drawSprites();
}