let playerScore = 0;
let ball;

function setup() {
    createCanvas(800, 600);
    paddle = new Paddle();
    ball = new Ball();
}

function draw() {
    background(0);
    textSize(32);
    text(`Score:${playerScore}`, width - 150, 50);
    fill(255);

    // ball.bounceEdge();
    // ball.bouncePaddle();
    // ball.update();

    if (keyIsDown(LEFT_ARROW)) {
        paddle.move('left');
    } else if (keyIsDown(RIGHT_ARROW)) {
        paddle.move('right');
    }

    paddle.display();
    ball.display();
}
