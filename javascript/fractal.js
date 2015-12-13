var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//
size(800, 400);

var clickCount = 1;
var backgroundColors = [color(255, 20, 147), color(20, 70, 150), color(10, 10, 3)];
background(backgroundColors[0])

mouseClicked = function () {
	background(backgroundColors[clickCount])
		
	clickCount = clickCount + 1;

	if (clickCount > 2)	{
		clickCount = 0;
	}	

};

draw = function () {
	
	//noStroke();
	fill(mouseX / 4, mouseY / 2, (mouseX / mouseY) * 100, 125);
	ellipse(mouseX, mouseY, 40, 40);

};



//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);