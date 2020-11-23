
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bd1,bd2,bd3,ground,paper,paper_image,dustbin_image

function preload(){
	
	dustbin_image = loadImage("dustbingreen.png")
}


function setup() {
	createCanvas(1200, 600);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bd1 = new Dustbin(902,505,10,120)
	bd2 = new Dustbin(962,565,130,10)
	bd3 = new Dustbin(1024,505,10,120)
	ground =  new Ground(400,670,800,10)
	paper = new Paper(85,85,20)
	Engine.run(engine);
	var image1 = createSprite(964,520,20,20)
	image1.addImage(dustbin_image);

}


function draw() {
  rectMode(CENTER);
  background(0);
  bd1.trashcan();
  bd2.trashcan();
  bd3.trashcan();
  ground.tcan();
  paper.greenbin();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



