const canvas = document.getElementById("canvas");
const toolBar = document.getElementById("toolBar");

const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

/*canvasOffsetX/Y subtracted from viewport width & hight due to tool bar 100px width*/ 
canvas.width = window.innerWidth - canvasOffsetX;
canvas.hight = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

//tool bar colour change and line thickness
toolBar.addEventListener("click", Event => {
    if (Event.target.id === "clear") {
        ctx.clearRect(0, 0, canvas.width, canvas.hight);
    }    
});

toolBar.addEventListener("change", Event => {
    if (Event.target.id === "stroke") {
        ctx.strokeStyle = Event.target.value;
    }

    if (Event.target.id === "lineWidth") {
        lineWidth = Event.target.value;
    } 
});

const draw = (Event) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(Event.clientX - canvasOffsetX, Event.clientY);
    ctx.stroke();
};

//making the canvas act as a drawing board
canvas.addEventListener("mousedown",(Event) => {
    isPainting = true;
    startX = Event.clientX;
    startY = Event.clientY;
});

canvas.addEventListener("mouseup", Event =>{
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

