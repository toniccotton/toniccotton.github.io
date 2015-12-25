var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//


size(600, 600);

var clickCount = 1;
var backgroundColors = [
	color(10, 10, 3),
	color(255, 20, 147), 
	color(20, 70, 150) 
];

var circleSize = 30;

background(backgroundColors[0])

var drawShape = function () {
	ellipse(mouseX, mouseY, circleSize, circleSize);
	ellipse(mouseY, mouseX, circleSize, circleSize);
	ellipse(width - mouseY, width - mouseX, circleSize, circleSize);
	ellipse(width - mouseX, width -  mouseY, circleSize, circleSize);
};

keyPressed = function () {
	background(backgroundColors[clickCount])
		
	clickCount = clickCount + 1;

	if (clickCount > 2)	{
		clickCount = 0;
	}	
};

mouseDragged = function () {
	//noStroke();
	fill(mouseX / 4, mouseY / 2, (mouseX / mouseY) * 100, 125);

	drawShape();		
};

//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);