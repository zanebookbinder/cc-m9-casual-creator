class Star {
    constructor(canvas, x, y) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
			
				this.totalSize = random(...TOTAL_STAR_SIZES);
				let maxCenterSize = Math.min(this.totalSize, STAR_CENTER_SIZES[1]);
				let maxMiddleSize = Math.min(this.totalSize, STAR_MIDDLE_SIZES[1]);
				
				this.outerRing = false;
				let maxOuterSize = 0;
				if(this.totalSize > STAR_OUTER_SIZES[0]) { // only do an outer ring if the star is large enough
					maxOuterSize = Math.min(this.totalSize, STAR_OUTER_SIZES[1]);
					this.outerRing = true;
				}
			
				this.coreSize = random(...STAR_CORE_SIZES);
				this.centerStrokes = new Array(15);
				this.middleStrokes = new Array(40);
				this.veryOuterStrokes = new Array(15);
			
				// define center strokes
				let i = 0;
				while(i < this.centerStrokes.length) {
					let randomArcSize = random(STAR_CENTER_SIZES[0], maxCenterSize);
					if(randomArcSize <= this.totalSize) {
						this.centerStrokes[i] = new StarStroke(
							this.canvas, this.x, this.y,
							getRandomFromList(STAR_CENTER_COLORS),
							randomArcSize,
							random(0, TWO_PI),
							50,
							5,
							5
						);
						i+=1;
					}
				}
			
				// define middle strokes
				i = 0
				while(i < this.middleStrokes.length) {
						let randomArcSize = random(STAR_MIDDLE_SIZES[0], maxMiddleSize);
						if(randomArcSize <= this.totalSize) {
							this.middleStrokes[i] = new StarStroke(
								this.canvas, this.x, this.y,
								getRandomFromList(STAR_MIDDLE_COLORS),
								randomArcSize,
								random(0, TWO_PI),
								50,
								5,
								5
							);
							i+=1;
						}
				}
			
				// define outer strokes
				if(this.outerRing) {
					this.outerStrokes = new Array(25);
					i = 0
					
					while(i < this.outerStrokes.length) {
							let randomArcSize = random(STAR_OUTER_SIZES[0], maxOuterSize);
							if(randomArcSize <= this.totalSize) {
								this.outerStrokes[i] = new StarStroke(
									this.canvas, this.x, this.y,
									getRandomFromList(STAR_OUTER_COLORS),
									randomArcSize,
									random(0, TWO_PI),
									50,
									5,
									5
								);
								i+=1;
							}
					}
				}
			
				// define very outer strokes
				i = 0
				while(i < this.veryOuterStrokes.length) {
					this.veryOuterStrokes[i] = new StarStroke(
						this.canvas, this.x, this.y,
						getRandomFromList(BLUE_SWIRL_COLORS),
						random(this.totalSize - 5, this.totalSize + 5),
						random(0, TWO_PI),
						50,
						2,
						5
					);
					i+=1
				}
			
    }

		// show all of the stored strokes
    display() {			
				this.canvas.ellipse(this.x, this.y, this.coreSize, this.coreSize);
			
				for(let i = 0; i < this.centerStrokes.length; i++) {
					this.centerStrokes[i].display();
				}
			
				for(let i = 0; i < this.middleStrokes.length; i++) {
					this.middleStrokes[i].display();
				}
			
				for(let i = 0; i < this.veryOuterStrokes.length; i++) {
					this.veryOuterStrokes[i].display();
				}
			
				if(this.outerRing) {
					for(let i = 0; i < this.outerStrokes.length; i++) {
						this.outerStrokes[i].display();
					}
				}
    }
}