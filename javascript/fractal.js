var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//
size(400, 400);

draw = function () {
	background(20, 133, 100);

	line(200, 200, mouseX, mouseY);

};


//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);