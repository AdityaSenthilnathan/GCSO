var car, wall, speed, weight, calc;
function setup() {
  speed = random(55,90);
  
  weight = random(400,1500);
  calc = (.5 * weight * speed * speed)/22500;
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(900, 200, 60, height/2);
  car.velocityX = speed;
  createCanvas(1600,400);
  car.shapeColor = "white"
}

function draw() {

  if (car.isTouching(wall)) {
    car.velocityX = 0;
  }
  car.collide(wall, collidecar);
  background(255,0,255);  
  
  drawSprites();
}
function collidecar(){
  if ( calc < 100){
    car.shapeColor = color(100,255,0);
}

if ( calc > 180){
  car.shapeColor = color(230,230,10);
}

if ( calc < 180 && calc > 100){
  car.shapeColor = color(212,34,30);
}
  

}