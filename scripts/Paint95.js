//defaults
let mouseClicked = false;
let color = "black";
let sizeWH = "15";
let borderRadius = "50%";

//clear
let clearPaint = document.getElementById("clearScreen");
clearPaint.addEventListener("click", function () {
    while (paintCanvas.firstChild) {
        paintCanvas.removeChild(paintCanvas.firstChild);
      }
});

//print
let printOut = document.getElementById("printScreen");
printOut.addEventListener("click", function () {
    window.print();
});

//draw
let paintCanvas = document.getElementById("myCanvas");
function drawOnCanvas(x, y) {
    let point = document.createElement("div");
    point.style.borderRadius = borderRadius;
    point.style.height = sizeWH + "px";
    point.style.width = sizeWH + "px";
    point.style.backgroundColor = color;
    point.style.left = x + "px";
    point.style.top = y + "px";
    point.style.position = "absolute";
    paintCanvas.append(point);
};

//shape
shapeSelected = function () {
    shapeOptions.forEach(item => {
        item.classList.remove('ssSelectedBorder');
    })
    event.target.classList.add('ssSelectedBorder');
    if (event.target.id == "circle"){
        borderRadius = "50%";
    }
    if (event.target.id == "square"){
        borderRadius = "0%";
    } 
};

let shapeOptions = document.querySelectorAll('.shapeBtns');
shapeOptions.forEach(item => {
    item.addEventListener("click", shapeSelected);
});

//size
sizeSelected = function () {
    sizeOptions.forEach(item => {
        item.classList.remove('ssSelectedBorder');
    })
    event.target.classList.add('ssSelectedBorder');
    if (event.target.id == "thin"){
        sizeWH = "5";
    }
    if (event.target.id == "med"){
        sizeWH = "15";
    }
    if (event.target.id == "thick"){
        sizeWH = "25";
    } 
};

let sizeOptions = document.querySelectorAll('.sizeBtns');
sizeOptions.forEach(item => {
    item.addEventListener("click", sizeSelected);
});

//color
colorSelected = function () {
    colorSquares.forEach(item => {
        item.classList.remove('colorSelectedBorder');
    })
    event.target.classList.add('colorSelectedBorder');
    if (event.target.classList.contains("red")){
        color = "#FF0000";
    }
    if (event.target.classList.contains("orange")){
        color = "#FF7F00";
    }
    if (event.target.classList.contains("yellow")){
        color = "#FFFF00";
    }
    if (event.target.classList.contains("green")){
        color = "#00FF00";
    }
    if (event.target.classList.contains("violet")){
        color = "#8B00FF";
    }
    if (event.target.classList.contains("blue")){
        color = "#0000FF";
    }
    if (event.target.classList.contains("indigo")){
        color = "#2E2B5F";
    }
    if (event.target.classList.contains("khaki")){
        color = "#C3B091";
    }
    if (event.target.classList.contains("brown")){
        color = "#964B00";
    }
    if (event.target.classList.contains("gray")){
        color = "gray";
    }
    if (event.target.classList.contains("black")){
        color = "black";
    }
    if (event.target.classList.contains("white")){
        color = "white";
    } 
};

let colorSquares = document.querySelectorAll('.colorSquare');
colorSquares.forEach(item => {
    item.addEventListener("click", colorSelected);
});

//coordinates
function getCoordinates(event) {
    let rect = paintCanvas.getBoundingClientRect();
    let rectLeft = rect.left + window.pageXOffset;
    let rectTop = rect.top + window.pageYOffset;
    let rectRight = rect.right + window.pageXOffset;
    let rectBottom = rect.bottom + window.pageYOffset;
    let x = event.pageX;
    let y = event.pageY;
    if (x >= rectLeft && x <= (rectRight - sizeWH) && y >= rectTop && y <= (rectBottom - sizeWH)) {
        drawOnCanvas(x, y);
    }
};

//mouse events
paintCanvas.addEventListener("mousedown", function (event) {
    getCoordinates(event);
    mouseClicked = true;
});

paintCanvas.addEventListener("mousemove", function (event) {
    if (mouseClicked === true) {
        getCoordinates(event);
    }
});

document.addEventListener("mouseup", function () {
    mouseClicked = false;
});