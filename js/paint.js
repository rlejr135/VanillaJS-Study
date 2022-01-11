const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const InputWidth = document.querySelector("#jsRange");

canvas.hegiht = 700;
canvas.width = 700;
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let _PaintStart = false;

let lastX = 0;
let lastY = 0;


function onMouseMove(event){
    ctx.moveTo(lastX, lastY);

    lastX = event.offsetX;
    lastY = event.offsetY;

    if (_PaintStart){
        console.dir(event)
        ctx.lineTo(lastX, lastY);
        ctx.stroke();
    }
}

function onMouseDown(event){
    _PaintStart = true;
}
function onMouseUp(event){
    _PaintStart = false;
}

function onMouseOut(event){
    _PaintStart = false;
}

function onWidthChange(event){
    ctx.lineWidth = InputWidth.value;
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseout", onMouseOut);
}

InputWidth.addEventListener("input", onWidthChange);