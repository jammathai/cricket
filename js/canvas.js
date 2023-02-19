const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let centerX, centerY;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);
