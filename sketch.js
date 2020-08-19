var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(400,680,800,10)
  dustbin1=new Dustbin(600,550,120,120)
  dustbin2=new Dustbin(600,570,10,90)
  dustbin3=new Dustbin(706,570,10,90)
  paper1=new paper(145,670,10)
  Launcher=new launcher( paper1.body,{x: 200,y: 300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
paper1.display();
Launcher.display();
  drawSprites();

 
}


function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  Launcher.fly();
}