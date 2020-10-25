var bullet
var wall,speed,weight,thickness
function setup() {
  createCanvas(800,200);
   bullet = createSprite(100,100,30,30);
   wall = createSprite(680,100,thickness,height/2);
   speed=random(1,9)
   weight=random(500,1200)
   thickness=random(22.83)
}


function draw() {
  background(0);  
if(keyDown("space")){
bullet.velocityX=speed;
}
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation = (0.5*weight*speed*speed)/22500
  if(deformation>180){
    wall.shapeColor=color("green")
  }
  if(deformation>180 && deformation>100){
    wall.shapeColor=color("red")
  }
  if(deformation<100){
    wall.shapeColor=color("orange")
  }
}

  drawSprites();
}
function hasColided(lbullet,lwall){
bulletRightEdge=lbullet.x + lbullet.width
wallLeftEdge = lwall.x
if(bulletRightEdge>=wallLeftEdge){}
return true
}

if(hascollided(bullet,wall)){
bullet.velocityX=0
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
if(damage<10){
  wall.shapeColor = color(255,0,0)
}
if(damage>10){
  wall.shapeColor = color(0,255,0)
}
}



