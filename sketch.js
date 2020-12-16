var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var side1,side2,base; 
var side1Body,side2Body,baseBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	base=createSprite(width/2,height-45,200,20);
	base.shapeColor="red";
	side1=createSprite(base.x-100,base.y-43,20,100);
	side1.shapeColor="red";
	side2=createSprite(base.x+100,base.y-43,20,100);
	side2.shapeColor="red";

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	side1Body=Bodies.rectangle(base.x-100,base.y-43,20,100,{isStatic:true});
	World.add(world,side1Body);
	side2Body=Bodies.rectangle(base.x+100,base.y-43,20,100,{isStatic:true});
	World.add(world,side2Body);
	baseBody=Bodies.rectangle(width/2,height-45,200,20,{isStatic:true});
	World.add(world,baseBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  side1.x=side1Body.position.x
  side1.y=side1Body.position.y
  side2.x=side2Body.position.x
  side2.y=side2Body.position.y
  base.x=baseBody.position.x
  base.y=baseBody.position.y
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



