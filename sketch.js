var monkey , monkey_running
var banana ,bananaImage, obstacle, stoneImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("obstacle.png");
  
}

function setup() {
  createCanvas(400,400);  
  
  monkey  = createSprite(60,340);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,380,800,20);
  ground.velocityX=-2;
  
  FoodGroup =  createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
background(255);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  //add the gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  
  //stop gravity pull
  monkey.collide(ground);
  spawnObstacles();
  spawnBanana();
  
  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 300 ===0 ){
    var stone = createSprite(400,360);
    stone.addImage("stone",stoneImage);
    stone.velocityX=-4;
    stone.scale= 0.1;
    
    obstacleGroup.add(stone);
    
  }
}

function spawnBanana(){
  if(frameCount % 80 === 0){
    banana = createSprite(400,240);
   banana.addImage("banana",bananaImage);
  banana.velocityX = -2;
  banana.scale=0.1;
  
    FoodGroup.add(banana);
  }
}





