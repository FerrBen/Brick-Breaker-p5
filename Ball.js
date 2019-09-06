class Ball {
    constructor(location) {
        this.radius = 30;
        this.location = createVector(paddle.location.x + (paddle.width / 2), paddle.location.y - (this.radius / 2));
        this.color = color(147, 112, 219);
        this.velocity = createVector(5, -5)
    }

    display() {
        fill(this.color)
        ellipse(this.location.x , this.location.y, this.radius, this.radius);
    }
}
