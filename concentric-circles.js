function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER)
}

function draw() {
  background(220);
  // for (var i = 0; i <= 390; i = i + 10) {
  var i = 0
  while(i < width){
    noFill()
    ellipse(200, 200, i, i);
  i = i + 5;
   }
}
