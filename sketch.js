


function preLoad(){
  
}

function setup() {
  createCanvas(2000,1000);
  form=new Form(200,200)
}

function draw() {
  background(255,255,255);  
  form.display();
  drawSprites();
}