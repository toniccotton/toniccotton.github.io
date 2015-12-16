var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//
size(800, 800);

var clickCount = 1;
var backgroundColors = [color(255, 20, 147), color(20, 70, 150), color(10, 10, 3)];
background(backgroundColors[0])

var drawShape = function () {
	line(mouseX, mouseY, pmouseX, pmouseY);
	line(mouseY, mouseX, pmouseY, pmouseX);
	line(800 - mouseY, 800 - mouseX, pmouseX, pmouseY);
	line(800 - mouseX, 800 -  mouseY, pmouseY, pmouseX);
};

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

	drawShape();		

};





//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas2');
new Processing(canvas, start);