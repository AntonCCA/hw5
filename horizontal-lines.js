function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(220);
  for (var i = 0; i <= 390; i = i + 10) {
    line(10, i, 390, i);
  }
}
