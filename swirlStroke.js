// CODE ADAPTED FROM: 
// https://p5js.org/examples/interaction-follow-3.html

const brushStrokes = 20;

class SwirlStroke {
	constructor(originalPixelColor, x2, y2, x1, y1) {
		this.x2 = x2;
		this.y2 = y2;
		this.x1 = x1;
		this.y1 = y1;
		
		this.startPoints = new Array(brushStrokes);
		this.endPoints = new Array(brushStrokes);
		this.colors = new Array(brushStrokes);
		this.strokeWeights = new Array(brushStrokes);
		this.angles = new Array(brushStrokes);
		this.colorIntensity = new Array(brushStrokes);
				
		// define all brush strokes
		for(let i = 0; i < brushStrokes; i++){
			let colorList = UPPER_SWIRL_COLORS;
			this.colorIntensity[i] = 90;
			if (mouseY > -0.2 * mouseX + 424) {
				colorList = LOWER_SWIRL_COLORS;
				this.colorIntensity[i] = 80;
			} else if(mouseY > 150) {
				colorList = MIDDLE_SWIRL_COLORS;
				this.colorIntensity[i] = 70;
			}
			
			colorList = colorList.concat([originalPixelColor, originalPixelColor, originalPixelColor]);
			this.colors[i] = varyColorsRandomly(getRandomFromList(colorList), 40);
			this.startPoints[i] = [
				this.varyPointRandomly(x1), this.varyPointRandomly(y1)
			]
			this.endPoints[i] = [
				this.varyPointRandomly(x2), this.varyPointRandomly(y2)
			]
			this.strokeWeights[i] = random(8, 14);
			
			let dx = this.endPoints[i][0] - this.startPoints[i][0];
			let dy = this.endPoints[i][1] - this.startPoints[i][1];
			this.angles[i] = atan2(dy, dx);
		}
		
		// console.log([originalPixelColor, x2, y2, x1, y1]);
		// console.log(this.angles)
	}
	
	// move point slightly for variety
	varyPointRandomly(x) {
		return x + random(-30, 30);
	}
	
	// show all stored lines
	display() {
		for(let i = 0; i < brushStrokes; i++) {
			stroke(...this.colors[i], this.colorIntensity[i]);
			strokeWeight(this.strokeWeights[i]);
			push();
			translate(this.startPoints[i][0], this.startPoints[i][1]);
			rotate(this.angles[i]);
			line(0, 0, segLength, 0);
			pop();
		}
	}
}