
var trex ,trex_running;
var groud;
  function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,180,20,50);


trex.addAnimation("running", trex_running);

//agregar tamaño y posicion al trex
trex.scale =0.5;
  //crear sprite del suelo
  groud=createSprite(200,180,400  ,20);
 
}

function draw(){
  background("white")

  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  //trex choca con el suelo
  trex.collide(groud);
  
  drawSprites();
}