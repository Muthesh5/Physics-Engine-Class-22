const Engine=Matter.Engine
const World=Matter.World
const Bodies =Matter.Bodies

var MyEngine, MyWorld, ground;
var ball;

function setup() {
  createCanvas(400,400);  
  MyEngine=Engine.create(); 
  MyWorld=MyEngine.world
  var obj_options= 
  {
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,20,obj_options)
  World.add(MyWorld,ground);

  var ball_opt={
    restitution: 1
  }
  ball=Bodies.circle(200,40,40,ball_opt)
  World.add(MyWorld,ball)


  console.log(ground.position.x)
}

function draw() {
  background(0);  
  Engine.update(MyEngine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
}