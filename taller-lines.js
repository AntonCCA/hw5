var offset = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    line(i+offset, i, 390, i);
  }
}