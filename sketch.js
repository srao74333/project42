var spacebgimg, issimg, spacecraftimg;
var spacecraft, iss;
var test;


function preload(){
spacebgimg = loadImage("Docking-undocking/Docking-undocking/spacebg.jpg");
issimg = loadImage("Docking-undocking/Docking-undocking/iss.png");
spacecraftimg = loadAnimation("Docking-undocking/Docking-undocking/spacecraft1.png", "Docking-undocking/Docking-undocking/spacecraft2.png", "Docking-undocking/Docking-undocking/spacecraft3.png", "Docking-undocking/Docking-undocking/spacecraft4.png");
shake = true;
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400,200,20,20);
  iss.addImage(issimg);
  iss.scale = 0.7;
  spacecraft = createSprite(355,300,20,20);
  spacecraft.addAnimation("animation", spacecraftimg);
  spacecraft.scale = 0.1;

}

function draw() {
  background(spacebgimg);
if(shake === true){
  spacecraft.x = spacecraft.x + random(-1, 1);  
}
 

 if(keyDown(UP_ARROW)){
   spacecraft.velocityY = -1;
 }
 else{
   spacecraft.velocityY = 0;
 }



  if(spacecraft.y <= (iss.y+60) && spacecraft.x <= (iss.x-35)){
   spacecraft.velocityY = 0;
   shake = false;
    textSize(25);
    fill("white");
    text("Docking Sucessfull!", 200, 300);
  }


  drawSprites();
}