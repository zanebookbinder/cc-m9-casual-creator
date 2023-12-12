// I WAS INSPIRED BY THIS POST WHEN CREATING THE BELOW CODE (BUT I HEAVILY ADAPTED IT):
// https://www.reddit.com/r/processing/comments/djh7ya/procedural_brush_strokes_using_bezier_curves_code/

// One stroke within a Star object
class StarStroke {
			
	constructor(canvas, x, y, color, arcWidth, startAngle, maxLength, width, bristleCount) {
		this.canvas = canvas;
    	this.x = x;
    	this.y = y;
		this.color = color;
		this.arcWidth = arcWidth;
		this.startAngle = startAngle;
		this.maxLength = maxLength;
		this.width = width;
		this.bristleCount = bristleCount;
		
		this.strokes = new Array(bristleCount);
		this.strokeWeights = new Array(bristleCount);
		this.colors = new Array(bristleCount);
		this.arcWidths = new Array(bristleCount);
		this.endAngles = new Array(bristleCount);
		
		// define all strokes
		this.strokes[0] = this.newStroke();
		this.strokeWeights[0] = random(arcWidth * 0.8, arcWidth * 1.2);
		for(let i = 0; i < bristleCount; i++){
			this.arcWidths[i] = [random(arcWidth * 0.8, arcWidth * 1.2), random(arcWidth * 0.8, arcWidth * 1.2)];
			this.strokes[i] = this.randomWalkPoints(this.strokes[0]);
			this.strokeWeights[i] = 4;
			this.endAngles[i] = random(this.startAngle - 0.75, this.startAngle + 0.75);

			this.colors[i] = varyColorsRandomly(this.color, 50);
		}
		
		// convert colors to hex
		for(let color of this.colors) {
			color = rgbToHex(color);
		}
		
	}
	
	// determine when to end the stroke's arc
	chooseEndAngle() {
		let arcAngle = HALF_PI * 2/3;
		return getRandomFromList([this.startAngle + arcAngle, this.startAngle - arcAngle]);
	}
	
	// move point slightly
	randomWalkPoints(arr) {
		let newArr = new Array(arr.length);
		for(let i = 0; i < arr.length; i++){
			newArr[i] = arr[i] + random(-this.width, this.width);
		}
		return newArr;
	}
	
	// create the points for a new arc
	newStroke() {
		let sLength = this.maxLength;
		let x2 = this.x + random(-sLength, sLength);
		let y2 = this.y + random(-sLength, sLength);
		let x3 = this.x + random(-sLength, sLength);
		let y3 = this.y + random(-sLength, sLength);
		let x4 = this.x + random(-sLength, sLength);
		let y4 = this.y + random(-sLength, sLength);
		return [this.x, this.y, x2, y2, x3, y3, x4, y4];
	}

	// display the arcs of all bristles
	display() {
		noFill();
		
		for(let i = 0; i < this.bristleCount; i++) {
			stroke(...this.colors[i], 80);
			strokeWeight(this.strokeWeights[i]);
			let a = min(this.startAngle, this.endAngles[i]);
			let b = max(this.startAngle, this.endAngles[i]);
			this.canvas.arc(this.x, this.y, this.arcWidths[i][0], this.arcWidths[i][1], a, b);
		}
	}
}