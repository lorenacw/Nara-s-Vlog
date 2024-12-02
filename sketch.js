var willy=0;
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(157,228,255);
  
 noStroke(); // remove outline

  //sun
  fill(255,215,16);
  ellipse(35,50,160);

  //clouds
  fill(255);
  ellipse(240, 50, 70, 30);
  fill(255);
  ellipse(110, 100, 100, 40);

   //grass
  fill(84,147,15);
  rect(0,410, 500, 100);
  
  //stem
  fill(138,196,74);
  rect(195,188,9,240);

  //leaves
  fill(138,196,74);
  ellipse(158,314,84,36);
  ellipse(232,360,64,28);

  //tree
  fill(149,104,55);
  rect(365,200,50,240);
  fill(0,132,31);
  ellipse(390,165,willy,200);

  //petals
  fill(212, 131, mouseX);
  ellipse(180, 180, 30, 30);
  ellipse(220, 220, 30, 30);
  ellipse(180, 220, 30, 30);
  ellipse(220, 180, 30, 30);
  
  ellipse(200, 170, 30, 30);
  ellipse(200, 230, 30, 30);
  ellipse(170, 200, 30, 30);
  ellipse(230, 200, 30, 30);
  
  //flower center
  fill(255, 244, mouseY);
  ellipse(200, 200, 40, 40);

  //instruction text
  fill(134,223,85)
  text('Click to grow the tree',98,475);
  textFont("Arial")
  textStyle('bold');
  textSize(30);
}

function mousePressed(){
  if (willy>=180){
    test=0;
  }else {
    willy=willy+4
  }
}