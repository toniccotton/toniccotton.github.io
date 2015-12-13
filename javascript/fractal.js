var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//
size(800, 400);

draw = function () {
	//background(20, 133, 100);
	//noStroke();
	fill(mouseX / 4, mouseY / 2, (mouseX / mouseY) * 100, 125);
	ellipse(mouseX, mouseY, 40, 40);

};

mouseClicked = function () {

 	background(255, 20, 147);

}


//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);