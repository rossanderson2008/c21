var fixedRect, movingRect;
var r1,r2;
var go1,go2,go3,go4;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80);

  go1 = createSprite(100,100,50,50)
  go2 = createSprite(200,100,50,50)
  go4 = createSprite(400,100,50,50)
  go3 = createSprite(300,100,50,50)
  go1.shapeColor = "purple"
  go2.shapeColor = "purple"
  go3.shapeColor = "purple"
  go4.shapeColor = "purple"

  fixedRect.shapeColor = "purple"
  movingRect.shapeColor = "purple"
  r1 = createSprite(100,0,50,50)
  r2 = createSprite(100,400,40,30)
  r1.shapeColor = "blue"
  r2.shapeColor = "yellow"
  r1.velocityY = 5
  r2.velocityY = -5
}

function draw() {
  background(0);  

movingRect.x = mouseX;
movingRect.y = mouseY;

//25 mr
//25 fr
//50



console.log(movingRect.x - fixedRect.x)
if(istouching(movingRect,go4)){
go1.shapeColor = "aqua"
    go2.shapeColor = "aqua"
}else{
go2.shapeColor = "purple"
    go1.shapeColor = "purple"
}
bounceoff()
  drawSprites();
}

function bounceoff(){
  if (r1.x - r2.x < r2.width/2 + r1.width/2
    && r2.x - r1.x < r2.width/2 + r1.width/2) {
      r1.velocityX = r1.velocityX * (-1);
  r2.velocityX = r2.velocityX * (-1);
  }
  if (r1.y - r2.y < r2.height/2 + r1.height/2
    && r2.y - r1.y < r2.height/2 + r1.height/2){
      r1.velocityY = r1.velocityY * (-1);
      r2.velocityY = r2.velocityY * (-1);
  }
  
}