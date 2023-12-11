// Change an RGB color by a given amount
function varyColorsRandomly(rgb, amt) {
	newRgb = [];
	for(let i = 0; i < rgb.length; i++){
		newVal = Math.round(rgb[i] + (Math.random() * amt - amt/2));
		if(newVal < 0) {
			newVal = 0
		}
		if(newVal > 255) {
			newVal = 255
		}
		newRgb.push(newVal);
	}
	return newRgb;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return "#" + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

function getRandomFromList(items) {
	return items[Math.floor(Math.random()*items.length)];
}

