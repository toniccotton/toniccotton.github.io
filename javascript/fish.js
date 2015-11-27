var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//

var setup = function () {
    size(400,400);
}

var drawFish = function (x, y, length, height, color2, tailWidth, tailColor, eyeSize) {

    var centerX = x;
    var centerY = y;
    var bodyLength = length;
    var bodyHeight = height;


    noStroke();
    fill(color2);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    fill(tailColor);
    //tailColor


    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
};

var movement = 0;


draw = function () {
    background(89, 216, 255);
    drawFish(270, 200, 80, 40, color(224, 38, 112), 20, color(217, 162, 21), 10);
    drawFish(movement, 300, 160, 40, color(120, 141, 204), 60, color(245, 22, 245), 25);
    drawFish(240, 80, 230, 60, color(49, 176, 42), 80, color(9, 0, 255), 40);

    noFill();
    stroke(255, 102, 0);
    stroke(0, 0, 0);
    bezier(85, 20, 10, 10, 90, 90, movement / 5, 80);

    movement = movement + 1 
}


//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);