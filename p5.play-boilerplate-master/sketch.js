
var zenitsukaimage,tanjiroimage,nezukoimage;
var zenitsu,tanjiro,nezuko,background1,backgroundimg;
var obg,Akazaimg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var Music;


function preload(){

zenitsukaimage= loadAnimation("nameitasimages/Zpic1.png","nameitasimages/Zpic2.png","nameitasimages/Zpic3.png","nameitasimages/Zpic4.png","nameitasimages/Zpic5.png","nameitasimages/Zpic6.png");

tanjiroimage= loadAnimation("nameitasimages/Tpic1.png","nameitasimages/Tpic2.png","nameitasimages/Tpic3.png","nameitasimages/Tpic4.png","nameitasimages/Tpic5.png","nameitasimages/Tpic6.png","nameitasimages/Tpic7.png","nameitasimages/Tpic8.png");

nezukoimage= loadAnimation("nameitasimages/Npic1.png","nameitasimages/Npic2.png","nameitasimages/Npic3.png","nameitasimages/Npic4.png","nameitasimages/Npic5.png","nameitasimages/Npic6.png","nameitasimages/Npic7.png","nameitasimages/Npic8.png");

backgroundimg= loadImage("nameitasimages/citybackground.jpg")

Akazaimg= loadAnimation("nameitasimages/apic1.png","nameitasimages/apic2.png","nameitasimages/apic3.png","nameitasimages/apic4.png","nameitasimages/apic5.png","nameitasimages/apic6.png");

kokoshiboimg= loadAnimation("nameitasimages/kpic1.png","nameitasimages/kpic2.png","nameitasimages/kpic.png","nameitasimages/kpic3.png","nameitasimages/kpic5.png","nameitasimages/kpic6.png","nameitasimages/kpic7.png","nameitasimages/kpic8.png","nameitasimages/kpic9.png");



inosukeimg= loadImage("nameitasimages/Inosuke.png")
akazaimg= loadImage("nameitasimages/Akaza.png")
muzanimg= loadImage("nameitasimages/Muzan.png")
sanemiimg= loadImage("nameitasimages/Sanemi.png")
goImg=loadImage("nameitasimages/go.jpg")
Music= loadSound("gurenge.mp3");


}
function setup() {
  createCanvas(1800,800);
  zenitsu= createSprite(400, 600, 50, 50);
  zenitsu.addAnimation("gif",zenitsukaimage);
  zenitsu.scale= 0.5;

  tanjiro= createSprite(200, 700, 50, 50);
  tanjiro.addAnimation("gif",tanjiroimage);
  tanjiro.scale= 0.5;

  nezuko= createSprite(600, 700, 50, 50);
  nezuko.addAnimation("gif",nezukoimage);
  nezuko.scale= 0.5;
   edges=createEdgeSprites();
   ground=createSprite(200,780,1200,10);
   go=createSprite(600,500,500,500);
   go.addImage("game over",goImg);
   ground.visible=false;

  /*background= createSprite(1800,400);
  background.scale= 2;
  background.addImage("bg",backgroundimg);
  background.depth= nezuko.depth;
  background.depth= tanjiro.depth;
  background.depth= zenitsu.depth;
  nezuko.depth= nezuko.depth+1;
  tanjiro.depth= tanjiro. depth+1;
  zenitsu.depth= zenitsu. depth+1;
*/
  obg= new Group();

  zenitsu.setCollider("circle",0,0,30);
  
  //Music.play();
}

function draw() {
  background(backgroundimg);  
  if(gameState === PLAY)
  {
    Music.play();
  go.visible=false;
  ground.velocityX = -3 

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space") && zenitsu.y>150)
  {
    zenitsu.velocityY=-10;
  }
    zenitsu.velocityY=zenitsu.velocityY+1;
  demons();

  if(obg.isTouching(zenitsu))
  {
    zenitsu.velocityX = 0;
    gameState= END;
  }

  if(gameState=== END){

    //Music.end();
    ground.velocityX= 0;
    obg.setVelocityXEach(0);
    zenitsu.velocityX= 0;
    tanjiro.velocityX= 0;
    nezuko.velocityX= 0;
    go.visible=true;

  }
}

 zenitsu.collide(ground);
  drawSprites();
}
function demons()
{
  if(frameCount%150===0)
  {
    var obstacle= createSprite(1000,700,50,100);
    obstacle.velocityX= -5;
    obstacle.scale= 0.3;
    var rand=Math.round(random(1,3))
    switch(rand)
    {
      case 1: obstacle.addImage("pic1",inosukeimg)
      break;
      case 2: obstacle.addAnimation("pic2",Akazaimg)
      break;
      case 3: obstacle.addImage("pic3",muzanimg)
      break;
      case 4: obstacle.addImage("pic4",sanemiimg)
      break;
      case 5: obstacle.addAnimation ("pic5",kokoshiboimg)
      break;
      default:break;
    }
    obg.add(obstacle);
  }
}

