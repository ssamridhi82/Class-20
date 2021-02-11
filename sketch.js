var fixedRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect =createSprite(400, 200, 50, 50);
  fixedRect.shapeColor ="red";
  fixedRect.debug = true;
  movingRect = createSprite(700, 200, 80, 30);
  movingRect.shapeColor= "red";
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  &&fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
  && movingRect.x - fixedRect.x < fixedRect.height/2 + movingRect.height/2
  &&fixedRect.x - movingRect.x < movingRect.height/2 + fixedRect.height/2
  ){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  drawSprites();

}