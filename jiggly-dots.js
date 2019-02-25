var bubble = {
		x: 300,
		y: 200,
		x2: 100,
		y2: 150,
		display: function() {
			stroke(255);
			strokeWeight(4);
			fill(random(255),random(150),random(255));
			ellipse(bubble.x, bubble.y, 25, 25);
			ellipse(bubble.x2, bubble.y2, 30, 30)
		},
		move: function() {
			this.x = this.x + random(-5, 5);
			this.y = this.y + random(-5, 5);
			this.x2 = this.x2 + random(-2, 2);
			this.y2 = this.y2 + random(-2, 2);



			}
		}
function setup(){
			createCanvas(600, 400);
		}

		function draw() {
			background(0);
			bubble.move();
			bubble.display();
			bubble.move();
			bubble.display();
		}
