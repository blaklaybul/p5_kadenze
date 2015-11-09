function setup() {
  // uncomment this line to make the canvas the full size of the window
  var width = 1024;
  var height = 768;
  createCanvas(width, height);
  background(0);
}

function draw() {
  // draw stuff here
  fill(133,49,129);
  stroke(19,29,212);
  strokeWeight(10)
  ellipse(width/2, height/2, 60, 60 );
}