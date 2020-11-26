 var tower,towerImg;
 var door,doorImg,doorsGroup;
 var climber,climberImg,climbersGroup;
 var ghost,ghostImg;
 var invisibleblock,invisibleblockGroup;
 var gamestate = "play" ;
 var spookySound;

function preload()
{
towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav")
}

function setup()
{
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY =1;
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost",ghostImg);
  
  doorsGroup = new Group();
  
  climbersGroup = new Group();
  
  invisibleblockGroup = new Group();
  
}

function draw()
{
 background(0);
  
  text("score:"+score,700,50);
  score = score+(getFrameRate()/60);
    
  if(gamestate==="play")
    {
      
    
  
  
  if(tower.y>400)
  {
    
    tower.y=300;
    
  }
  
  if(keyDown("left_arrow"))
    {
      ghost.x = ghost.x-3;
      
    }
  
  if(keyDown("right_arrow"))
    {
      ghost.x = ghost.x+3;
    }
  
  if(keyDown("space"))
    {
      ghost.velocityY = -5; 
    }

  ghost.velocityY = ghost.velocityY+0.8;
  
  if(climbersGroup.isTouching(ghost))
    {
      ghost.velocityY = 0;
    }
  
  if(invisibleblockGroup.isTouching(ghost)||ghost.Y>600)
    {
      ghost.destroy();
    }
    
  
 spawnDoor();
  
  
  drawSprites();
}
}

if(gameState==="end")
  {
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("gameover",230,250)
  }

function spawnDoor()
{
  if(frameCount % 240===0)
    {
      var door = createSprite(200,-50);
      door.addImage(doorImg);
      
      var climber = createSprite(200,10);
      climber.addImage(climberImg);
      
      var invisibleblock = createSprite(200,15);
      invisibleblock.width = climber.width;
      invisibleblock.height = 2;
      
      
      
      door.x=Math.round(random(120,400));
      door.velocityY = 1;
      
      climber.x = door.x;
      climber.velocityY = 1;
      
      ghost.depth = door.depth;
      ghost.depth+=1;
      
      //assinged life time
      
      door.lifetime=600;
      
      //add each door to group
      
      doorsGroup.add(door);
      
      climbersGroup.add(climber);
      
      invisibleblock.debug = true;
      invisibleblockGroup.add(invisibleblock);
    }
}


















