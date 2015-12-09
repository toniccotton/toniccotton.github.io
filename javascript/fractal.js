var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//
size(800, 400);

draw = function () {
	//background(20, 133, 100);
	stroke(mouseX / 2, 50, 50);
	line(200, 200, mouseX, mouseY);

};

mouseClicked = function () {
 


	alert("it works");

}


//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);