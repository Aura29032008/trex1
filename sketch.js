var trex,trexRunning,ground,groundMoving,cloudImage,obstacle1Image,obstacle2Image,obstacle3Image,obstacle4Image,obstacle5Image,obstacle6Image,ObstaclesGroup,CloudGroup;


var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  trexRunning=loadAnimation("trex1.png","trex3.png","trex4.png");
  groundMoving=loadImage("ground2.png");
  cloudImage=loadImage("cloud.png");
  obstacle1Image=loadImage("obstacle1.png");
  obstacle2Image=loadImage("obstacle2.png");
  obstacle3Image=loadImage("obstacle3.png");
  obstacle4Image=loadImage("obstacle4.png");
  obstacle5Image=loadImage("obstacle5.png");
  obstacle6Image=loadImage("obstacle6.png");
  
  
  
}



function setup() {
  createCanvas(400, 400); 
  trex=createSprite(50,350,20,20);
  trex.addAnimation("Aura",trexRunning);
  trex.scale= 0.5;
  trex.setCollider("circle",0,0,20);
  
  
    
  
  ground=createSprite(50,350,20,20);
  ground.addImage("Payal",groundMoving);
  
  ObstaclesGroup=new Group();
  CloudGroup=new Group();
  
  
  
}

function draw() {
  background(100);
  
  
  
  if(gameState===PLAY){
    ground.velocityX=-5;
    trex.velocityY=trex.velocityY+0.5;
    trex.collide(ground);
    spawnClouds(); 
    obstacles();
    
    
if(keyDown("space") && trex.y>=320) {
  trex.velocityY=-12; 
}
    if(ground.x<0){
    ground.x=ground.width/2;
  }
    if(ObstaclesGroup.isTouching(trex)){
      gameState=END;
    }
  }else if(gameState===END){
    ground.velocityX=0;
    trex.velocityY=0;
    ObstaclesGroup.setVelocityXEach(0);
    CloudGroup.setVelocityXEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    CloudGroup.setLifetimeEach(-1);
    
  }
  
  
  
  
  
 
  
  drawSprites();
  
  
  
  
  
  
}



function spawnClouds(){
  
  if(frameCount%60===0){
    var cloud=createSprite(400,280,20,20);
    cloud.velocityX=-5;
    cloud.y=random(280,320);
    cloud.addImage("Cloud",cloudImage);
    cloud.scale=0.5;  
    cloud.depth=trex.depth;
    trex.depth=trex.depth+1;
    cloud.lifetime=80;
    CloudGroup.add(cloud);
  }
  
  

  
}


function obstacles(){
  if(frameCount%80===0){
  var obstacles=createSprite(400,330,20,20);
  obstacles.velocityX=-5;
  
    var rand=Math.round(random(1,6));
 
    switch(rand){
      case 1: obstacles.addImage("Obstacle",obstacle1Image);
      break;
      case 2: obstacles.addImage("obstacle2",obstacle2Image);
      break;
      case 3: obstacles.addImage("obstacle3",obstacle3Image);
      break;
      case 4: obstacles.addImage("obstacle4",obstacle4Image);
      break;
      case 5: obstacles.addImage("obstacle5" ,obstacle5Image);
      break;
      case 6: obstacles.addImage("obstacle6",obstacle6Image);
      break;
    }
    obstacles.scale=0.7;
    obstacles.lifetime=80;
    ObstaclesGroup.add(obstacles);
    
  
    
  }
  
}
  









