var start = function(processing) { with (processing) {
//
// BEGIN PROCESSING ENVIRONMENT
//

var setup = function () {
    size(400,400);
}

var drawFish = function (centerX, centerY, bodyLength, bodyHeight, color2, tailWidth, tailColor, eyeSize) {

    noStroke();

    // body
    fill(color2);
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    
    // tail
    fill(tailColor);
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);

    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
};

var movement1 = -180;
var movement2 = -210;
var movement3 = -150;

// draw = function () {
//     // draw water
//     background(89, 216, 255);

//     // draw fish
//     drawFish(movement1, 80, 230, 60, color(49, 176, 42), 80, color(9, 0, 255), 40);
//     drawFish(movement2, 200, 80, 40, color(224, 38, 112), 20, color(217, 162, 21), 10);
//     drawFish(movement3, 300, 160, 40, color(120, 141, 204), 60, color(245, 22, 245), 25);

//     // increment movement by 1
//     movement1 = movement1 + 1 
//     movement2 = movement2 + 2
//     movement3 = movement3 + 1.5

//      if (movement1 > 850) {
//         movement1 = -180
//     }       

//      if (movement2 > 550) {
//         movement2 = -210
//     }

//     if (movement3 > 600) {
//         movement3 = -150
//     }

// };


//
// END PROCESSING ENVIRONMENT
//
}};
var canvas = document.getElementById('canvas1');
new Processing(canvas, start);