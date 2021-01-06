
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var paper;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbin=new Dustbin(1200,650);
  
}

function draw() {
  background("lightpink");
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display(); 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}



