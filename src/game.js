function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;


    this.initGame = function () {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        new InputHandler(this.paddle);
    };
    this.updateGame = function (deltaTime) {
        this.paddle.updatePositionPaddle(deltaTime);
        this.ball.updatePositionBall(deltaTime);
    };
    this.drawGame = function (ctx) {
        this.paddle.drawPaddle(ctx);
        this.ball.drawBall(ctx);
    };
}