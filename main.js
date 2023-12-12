// The main Processing file

let starMode = false;
let stars = new Array(0);
let swirlStrokes = new Array(0);
let drawingSwirls = false;
let segLength = 25;
let bg;
let realImage;

function setup() {
    createCanvas(800, 600);
    bg = loadImage("starry-night.png");
	realImage = loadImage("starry-night-full.png")
}

function draw() {
    background(32, 64, 104);
	
		// track the mouse for movement
		if (mouseDistanceFromLastSegment() > segLength && drawingSwirls && !starMode) {
			newSegment();
		}
	
		// display all the stored objects
		for (let i = 0; i < swirlStrokes.length; i++) {
			swirlStrokes[i].display();
		}

    for (let i = 0; i < stars.length; i++) {
      stars[i].display();
    }
	
		// display image on top of everything else
	  image(bg, 0, 0, 800, 600);
}

// create a new segment of blue swirls
function newSegment() {
	let prevX = swirlStrokes[swirlStrokes.length - 1].x2;
	let prevY = swirlStrokes[swirlStrokes.length - 1].y2;
	
	let originalPixelColor = realImage.get(int(mouseX), int(mouseY)).slice(0, 3);
	swirlStrokes.push(
		new SwirlStroke(originalPixelColor, mouseX, mouseY, prevX, prevY)
	);
}

// calculate the mouse's current distance from the last created segment
function mouseDistanceFromLastSegment() {
	if(!swirlStrokes.length) {
		return 0
	}
	
	let dX = mouseX - swirlStrokes[swirlStrokes.length - 1].x2; 
	let dY = mouseY - swirlStrokes[swirlStrokes.length - 1].y2;  
	
	return Math.sqrt(dX * dX + dY * dY);
}

// create art based on current mode
function mousePressed() {
	if (starMode) {
			stars.push(new Star(this, mouseX, mouseY));
	} else {
			// start a swirl with an original stroke
			if(!drawingSwirls) {
				let originalPixelColor = realImage.get(int(mouseX), int(mouseY)).slice(0, 3);
				swirlStrokes.push(
					new SwirlStroke(originalPixelColor, mouseX, mouseY, mouseX+20, mouseY+5)
				);
			}
			drawingSwirls = !drawingSwirls;
	}
}

// switch between star and swirl modes with the key 'x'
function keyPressed() {
	if(key == 'x' || key == 'X') {
		starMode = !starMode;
		if(starMode) {
			drawingSwirls = false;
		}
	}
}