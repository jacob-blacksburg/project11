var path
var jax
function preload(){
  //pre-load images
  jax_ani=loadAnimation("Runner-1.png","Runner-2.png")
  path_img=loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,20,20);
  path.addImage("img", path_img)
  path.scale=1.2
  
  jax = createSprite(200,360,20,20);
  jax.addAnimation("ani", jax_ani);
  jax.scale= 0.06

  left_b = createSprite(0,0,100,800)
  left_b.visible=false

  right_b = createSprite(410,0,100,800)
  right_b.visible=false
  edges = createEdgeSprites()
}

function draw() {
  background(0);
  path.velocityY = 3
  jax.x= mouseX
  jax.collide(edges[3])
  jax.collide(left_b)
  jax.collide(right_b)

  if(path.y>400) {
    path.y=height/2
  }
  drawSprites()
}
