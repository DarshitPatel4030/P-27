
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 const Constraint = Matter.Constraint;





var bob1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(400,200,20)
ground=new Ground(440,50,600,50)
r1=  new Rope(bob1.body,{x:400,y:50})
		bob2=new Bob(440,200,20)
		bob3=new Bob(480,200,20)
		bob4=new Bob(520,200,20)
		bob5=new Bob(560,200,20)
		r2=  new Rope(bob2.body,{x:440,y:50})
		r3=  new Rope(bob3.body,{x:480,y:50})
		r4=  new Rope(bob4.body,{x:520,y:50})
		r5=  new Rope(bob5.body,{x:560,y:50})
		Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(82,236,242);
  text(mouseX+','+mouseY,mouseX,mouseY)
  drawSprites();
bob1.display();
ground.display();
r1.display()
bob2.display();
bob3.display();
bob4.display();
bob5.display();
r2.display()
r3.display()
r4.display()
r5.display()
}
function keyPressed(){
	if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(bob5.body,{x:bob5.body.position.x,y:bob5.body.position.y}, {x:50,y:0});
	}
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x,y:bob1.body.position.y}, {x:-50,y:0});
		}
}
