const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var snow=[];
var ball;
var sling;
var ballI;
var boy,boyimg;
var ground,groundImg,ig;
var k,kimg,k1,k2,kkimg;
function preload(){
  bg = loadImage("snow2.jpg");
  boyimg = loadAnimation("boy.png");
  boyI2 = loadAnimation("boy1.png","boy2.png");
  boyI3 = loadAnimation("boy4s.png","boy5s.png");
  boyj1 = loadAnimation("boyj1.png");
  boyj2 = loadAnimation("boyj2.png");
  bof = loadAnimation("boyf.png");
  groundImg = loadImage("ground1.jpg");
  ballI = loadImage("t.png");
  sound = loadSound("jump.wav");
  kimg = loadAnimation("r3.png");
  kkimg = loadAnimation("r3f.png");
  k1 = loadAnimation("r1.png","r2.png","r3.png");
  k2 = loadAnimation("r1f.png","r2f.png","r2f.png");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy = createSprite(400,340,10,10);

  boy.addAnimation("boy",boyimg);

  k = createSprite(600,310,10,10);
  k.scale = 0.5;
  
  k.addAnimation("k",kimg);
  ground = createSprite(400,470);
  ground.addImage(groundImg);
  ig = createSprite(400,390,400,10)
  ig.visible = false;

  ball = Bodies.circle(500,200,10);
  World.add(world,ball);
  sling = new Sling(ball,{x:420,y:320});

  Engine.run(engine);
}

function draw() {
  background(bg); 
  fill("black");
  strokeWeight(2);
  stroke("black");
  textSize(14);
  text("YOU CAN USE RIGHT,LEFT OR UP ARROW TO MOVE OR STOP THE BOY",10,50);
  text("YOU CAN USE SPACE BAR TO MAKE BOY JUMP",10,70);
  text("YOU CAN DRAG THE ICE BALL AND RELEASE IT,THE BALL IS NEAR BY BOY",10,90);
  text("YOU HAVE TO PRESS 'R' TO GET BACK THE ICE BALL",10,110);
  Engine.update(engine);
boy.depth = ground.depth;
boy.depth = ground.depth + 1;
k.depth = ground.depth;
k.depth = ground.depth + 1;
snow.depth = ground.depth;
snow.depth = ground.depth - 1;


if(ground.velocityX === -4){
  
if(ground.x < 100){
  ground.x = 450;
}
if(keyCode === 38){
  boy.addAnimation("boy",boyimg);
  k.addAnimation("k",kimg);
  ground.velocityX = 0;
  sound.play();
 }
 
 
}
if(ground.velocityX === 4){
  if(ground.x > 400){
    ground.x = 0;
  }
  if(keyCode === 38){
    boy.addAnimation("boy",bof);
    ground.velocityX = 0;
    k.addAnimation("k",kkimg);
    sound.play();
   }
   
  }
  
  if(frameCount%1 === 0){
     snow.push(new Snow(random(0,800),20,20));
  }

  for(var j=0;j<snow.length;j++){
    snow[j].display();
  }
 
  if(keyDown("space") && boy.y>=250){
    
    boy.velocityY = -7;
    sound.play();
   }
   boy.velocityY = boy.velocityY + 0.8;
   boy.collide(ig);
     stroke("black");
   ellipseMode(CENTER);
   imageMode(CENTER);
   image(ballI ,ball.position.x,ball.position.y,-30,-30);
  sling.display();

  drawSprites();
}
function keyPressed(){
  if(keyCode === 39){
    boy.addAnimation("boy",boyI2);
    k.addAnimation("k",k1);
    ground.velocityX = -4;
    sound.play();
   }
   if(keyCode === 37){
    boy.addAnimation("boy",boyI3);
    k.addAnimation("k",k2);
    ground.velocityX = 4;
    sound.play();
   }
   
   if(keyCode === 82){
    sling.attach(this.ball);
    Matter.Body.setPosition(this.ball,{x:500,y:200});
}

   };
   function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }
  



