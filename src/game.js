function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;


    this.initGame = function () {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);


        this.gameObjects = [this.ball, this.paddle];

        new InputHandler(this.paddle);
    };
    this.updateGame = function (deltaTime) {
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

        // this.gameObjects.forEach(object => object.update(deltaTime));
        this.gameObjects.forEach(function (obj) {
            obj.update(deltaTime);
        });

    };
    this.drawGame = function (ctx) {
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        // this.gameObjects.forEach(object => object.draw(ctx));
        this.gameObjects.forEach(function (obj) {
            obj.draw(ctx);
        });

    };
}