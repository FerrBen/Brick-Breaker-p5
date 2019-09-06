class Ball {
    constructor(location) {
        this.radius = 15;
        this.size = this.radius * 2;
        this.location = createVector(paddle.location.x + (paddle.width / 2), (paddle.location.y - this.radius  -10));
        this.color = color(147, 112, 219);
        this.velocity = createVector(5, -5);
        this.paddle = paddle;
    }

    bouncePaddle() {
        // Within the width of the paddle
        if(this.location.x + this.radius >= this.paddle.location.x &&
           this.location.x - this.radius <= this.paddle.location.x + this.paddle.width) {
            if(this.location.y + this.radius <= this.paddle.location.y) {
                this.velocity.y *= -1;
                this.location.y = this.paddle.location.y - this.radius -1;
            }
           }
    }

    bounceEdge() {
        
        if(this.location.x + this.radius >= width) { // Check right edge
            this.velocity.x *= -1
        } else if(this.location.x - this.radius <= 0) { // Check left edge
            this.velocity.x *= -1
        } else if(this.location.y - this.radius <= 0) { // Check top
            this.velocity.y *= -1
        }
    }

    display() {
        fill(this.color)
        ellipse(this.location.x , this.location.y, this.size, this.size);
    }

    update() {
        this.location.add(this.velocity);
    }
}
