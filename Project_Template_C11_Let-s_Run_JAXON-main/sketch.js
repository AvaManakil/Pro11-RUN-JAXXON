var runner;
var track, leftBoundary, rightBoundary;
var path;
var person;

function preload(){
  //pre-load images
  path = loadImage("path.png");
  
  person = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImage(path);
  track.velocityY = 4;
  track.scale = 1.2;

  runner = createSprite(180,340,20,20);
  runner.scale = 0.08;
  runner.addAnimation("running", person);
  

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

}

function draw() {
  background(0);

  track.velocityY = 4;

  runner.x = World.mouseX;

  edges = createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  if(track.y > 400) {
    track.y = height/2;
  }
  
  drawSprites();
}
