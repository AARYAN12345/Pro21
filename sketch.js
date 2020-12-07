var car,wall
var weight,speed
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1600,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  car.velocityX=speed
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX=0
    var deformation =0.5*weight*speed*speed/22509
    if (deformation > 180){
      car.shapeColor=color(250,0,0) 
    }
    if (deformation < 180){
      car.shapeColor=color(230,230,0) 
    }
    if (deformation < 100){
      car.shapeColor=color(0,255,0) 
    }
  }
  
  
  drawSprites();
}