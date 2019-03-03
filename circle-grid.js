function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  

// var width = 400;
// var height = 400;
  
  for(var x = 0; x < width;x += 30){
    for(var y = 0;y <= height;y += 30){
    ellipse(x,y,25,25);
  }
}
}
