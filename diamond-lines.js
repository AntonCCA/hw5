var offset = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    line(i - offset,i + offset, 390, i);
  }
}


couldnt figure this one out, everytime i added a nested loop, the P5 editor froze
