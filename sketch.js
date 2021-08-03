var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var leaves;
var appleImg;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}





  



function draw() {
  background(0);
  rabbit.x=World.mouseX;

  
  createapples();
  createleaves();
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createapples(){
  if(frameCount % 80 == 0){
    apple = createSprite(Math.round(random(50,350)),40,10,10);
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY=2;
    apple.lifetime= 300;
    apple.depth = rabbit.depth
    rabbit.depth = rabbit.depth + 1 
  }
  
  
}
function createleaves(){
  if(frameCount % 80 == 0){
    leaves = createSprite(Math.round(random(50,350)),40,10,10)
    leaves.addImage(leafImg);
    leaves.scale = 0.1;
    leaves.velocityY=2;
    leaves.lifetime= 165;
    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
  }

}