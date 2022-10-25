
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.shadowColor = "black";
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur = 10;
ctx.globalAlpha = 0.5;
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.fillStyle = "red";

var circle = function(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let canvass = document.querySelector(".canvas");
canvass.addEventListener('click', (event) => {
    circle(event.offsetX, event.offsetY, 10, true)
});
let canvasss = document.querySelector(".canvas");
canvass.addEventListener('mousemove', (event) => {
    circle(event.offsetX, event.offsetY, 3, false)
});