var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  //gives random speed and weight
  speed = random(50,90);
  weight = random(400,1500);

  //creates the wall and gives its colour
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);

  //creates the cars 
  car = createSprite(50,200,50,50);
  
  //gives the velocityX of the car
  car.velocityX = speed;

}

 

function draw() {
  background(0);
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    //creates deformation
    var deformation = 0.5*weight*speed*speed/22500;

    //gives conditions for colour of car after deformation
    if(deformation>180){
    car.shapeColor = color(255,0,0);
  } else 
  if(deformation>100 && deformation<180){
    car.shapeColor = color(230,230,0);
  } else 
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
}
  
  
  drawSprites(); 
}
   

