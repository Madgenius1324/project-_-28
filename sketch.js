
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var t,g,s;
var m1,m2,m3,m4,m5;
var boy,i4;
var c;
function preload()
{
	i4=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
t=new tree(700,200,500,500);
g=new ground(800,680,1200,20);
s= new stone(150,300,50);
m1=new mango(1100,300,60);
m2=new mango(1000,400,60);
m3=new mango(1000,300,60);
m4=new mango(950,250,60);
m5=new mango(950,350,60);
c=new Chain(s.body,{x:210,y:310});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  image(i4,200,300,200,300)
  t.display();
  g.display();
  s.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  c.display();

detectollision(s,m1);
detectollision(s,m2);
detectollision(s,m3);
detectollision(s,m4);
detectollision(s,m5);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    c.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}


function keyPressed(){
  if(keyCode===32){
      Matter.Body.setPosition(s.body, {x:235, y:420})
      c.attach(s.body);
  }
}