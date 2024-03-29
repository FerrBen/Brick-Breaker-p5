class Paddle {
    constructor() {
        this.width = 130;
        this.height = 25;
        this.color = color(255);
        this.location = createVector(width / 2 - this.width / 2, height - 35);
        const speed = 6;
        this.speed = {
            right: createVector(speed, 0),
            left: createVector(speed * -1, 0)
    }
}

    display() {
        fill(this.color);
        rect(this.location.x, this.location.y, this.width, this.height);
    }

    move(direction) {
        this.location.add(this.speed[direction])
    }
}
