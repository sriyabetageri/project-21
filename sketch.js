var wall, thickness;

var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90) 
  weight=random(400,1500)

  thickness=random(22,83)

  bullet = createSprite(80, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);

  wall = createSprite(1200,200,thickness, height/2)
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("black"); 

  
  if(wall.x - bullet.x <(bullet.width+wall.width)/2){


bullet.velocityX = 0
  
  var deformation = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if(deformation>10)
  {
    wall.shapeColor = color("red")
  }
  if(deformation < 10)
  {
    wall.shapeColor = color(0,255,0)
  }
 
drawSprites();
  }

function hasCollided(bullet, wall)
{
bulletRightEdge =  bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false
}
} 





