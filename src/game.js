function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;


    this.initGame = function () {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        // let brick = new Brick(this,{x:20,y:20});
        let brick = [];
        for(let i = 0; i < 10; i++ ){
            brick.push(new Brick(this,{x: i * 52, y: 24}));
        }


        this.gameObjects = [this.ball, this.paddle, ...brick];

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