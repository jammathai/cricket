const TAU = 2 * Math.PI;

const ball = {
    x: 0, y: 0, z: 0,
    velX: 0, velY: 0, velZ: 0,
    color: "red",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    radius: 5,

    draw: function() {
        const [shadowX, shadowY] = camera.project(this.x, this.y, 0);
        ctx.fillStyle = this.shadowColor;
        ctx.beginPath();
        ctx.ellipse(
            shadowX, shadowY,
            this.radius, this.radius * camera.angle,
            0, 0, TAU
        );
        ctx.closePath();
        ctx.fill();

        const [x, y] = camera.project(this.x, this.y, this.z);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, TAU);
        ctx.closePath();
        ctx.fill();
    }
}
