const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const InputWidth = document.querySelector("#jsRange");
const Colors = document.querySelectorAll(".jsColor");
const PaintMode = document.querySelector("#jsMode");

const INIT_COLOR = "rgb(0, 0, 0)";
const INIT_LINEWIDTH = 2.5;

ctx.strokeStyle = INIT_COLOR;
ctx.fillStyle = INIT_COLOR;
ctx.lineWidth = INIT_LINEWIDTH;

let _PaintStart = false;
let filling = false;
let lastX = 0;
let lastY = 0;

function onMouseMove(event) {
  const lastX = event.offsetX;
  const lastY = event.offsetY;

  if (_PaintStart) {
    ctx.lineTo(lastX, lastY);
    ctx.stroke();
  }
  else{
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
  }
}

function onMouseDown(event) {
  _PaintStart = true;
}
function onMouseUp(event) {
  _PaintStart = false;
}

function onMouseOut(event) {
  _PaintStart = false;
}

function onBrushWidthChange(event) {
  ctx.lineWidth = InputWidth.value;
}

function onColorClick(event) {
  const Selectedcolor = event.target.style.backgroundColor;
  ctx.strokeStyle = Selectedcolor;
  ctx.fillStyle = Selectedcolor;
}

function HandleModeClick(){
  if (filling == true){
    // Paint Mode Start
    filling = false;
    PaintMode.innerText = "Paint";
  }
  else {
    // Fill Mode Start
    filling = true;
    PaintMode.innerText = "Fill";
  }
}

function handleCanvasClick() {
  if (filling) {
    ctx.fillRect(0, 0, canvas.height, canvas.width);
  }
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseout", onMouseOut);
  canvas.addEventListener("click", handleCanvasClick);
}
if (InputWidth) {
  InputWidth.addEventListener("input", onBrushWidthChange);
}

if (PaintMode) {
  PaintMode.addEventListener("click", HandleModeClick);
}

Array.from(Colors).forEach(color => 
  color.addEventListener("click", onColorClick)
);