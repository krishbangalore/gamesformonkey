
var monkey , monkey_running
var banana ,bananaImage, obstacles, obstaclesImage
var FoodGroup, obstaclesGroup
var score;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
  
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2
obstaclesGroup=createGroup();
bananaGroup=createGroup();
}


function draw() {
createObstacles();
  createBanana();

  background(220);
 stroke("white");
textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival time:"+ survivalTime, 100,50); 
   
      if(keyDown("space")&& monkey.y >= 300)
      {
        monkey.velocityY = -12;
      } 
      if (ground.x < 0)
      {
        ground.x = ground.width/2;
        //add gravity
      }
        monkey.velocityY = monkey.velocityY + 0.8
          monkey.collide(ground);
         
   
        drawSprites();
      
    

    }


function createObstacles(){
  
  if (frameCount % 300 === 0) {
     obstacles = createSprite(600,325,40,10);
    obstacles.y = Math.round(random(325,330));
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
        obstaclesGroup.add(obstacles);
  }
 
}
function createObstacles(){
  
  if (frameCount % 300 === 0) {
     obstacles = createSprite(600,325,40,10);
    obstacles.y = Math.round(random(325,330));
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
        obstaclesGroup.add(obstacles);
    bananaGroup.add(banana)
  }
 
}

function createBanana(){
  
  if (frameCount % 60 === 0) {
     banana = createSprite(600,400,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
        bananaGroup.add(banana);
  }
 
}

