
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperball,ground,log,log1,log2,log1Body,logBody,log2Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	paperball= new Paper (85,85,50);
	ground = new Ground(600,height,1200,20);
	log = new Bin (800,320,150,15);
	log1 = new Bin (700,380,15,175);
	log2 = new Bin (600,320,150,15);




	log1Body= Bodies.rectangle(700,380,15,175, {isStatic:true});
	World.add(world, log1Body);

	logBody= Bodies.rectangle(800,320,175,15, {isStatic:true});
	World.add(world, logBody);

	log2Body= Bodies.rectangle(600,320,175,15, {isStatic:true});
	World.add(world, log2Body);

}


function draw() {
  rectMode(CENTER);
  background(0);

  
  Engine.update(engine);
ground.display();
paperball.display();
log.display();
log1.display();
log2.display();

  drawSprites();
 
}
function  keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:120,y:-85});
}

}




