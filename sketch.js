const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var board,boardimg
var strk,strkimg

function preload() {
  boardimg = loadImage("b.png.png")
  strkimg = loadImage("cc.png.png")
}
function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
   world = engine.world;
  
  
   strk = createSprite(700,570)
   strk.addImage(strkimg)
   strk.scale = 0.1
  
  board= createSprite(700,350,150,50)
  board.addImage(boardimg)
  board.scale = 0.8
  
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 
board.display();
strk.depth = board.depth 
  strk.depth = strk.depth+5
 
  strk.x = mouseX
  if(strk.x > 890){
   strk.x = 890
  }
  if(strk.x < 510){
    strk.x = 510
   }
  drawSprites();
}