const camera = {
    x: 0, y: 0, z: 0,
    angle: 0.5,

    project: function(x, y, z) {
        const relX = x - this.x;
        const relY = y - this.y;
        const relZ = z - this.z;
        return [
            relX + centerX,
            relY * this.angle - relZ * (1 - this.angle) + centerY
        ];
    }
};
