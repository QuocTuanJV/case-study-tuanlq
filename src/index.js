const  GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
// paddle.draw(ctx);
// ctx.fillStyle = '#f00';
// ctx.fillRect(20,20,100,100);
new InputHandler(paddle);
let lastTime = 0;

//images
let ball = new Ball();

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    paddle.updatePositionPaddle(deltaTime);
    paddle.drawPaddle(ctx);
    //ball
    ball.drawBall(ctx);
    requestAnimationFrame(gameLoop);
}

// gameLoop();
requestAnimationFrame(gameLoop);