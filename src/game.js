const GAME_STATE = {
    PAUSED: 0,
    RUNNING:1,
    MENU: 2,
    GAME_OVER: 3
}
function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;


    this.initGame = function () {
        this.gamestate = GAME_STATE.RUNNING;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        // let brick = new Brick(this,{x:20,y:20});
        let brick = buildingLevel(this,level1);

        this.gameObjects = [this.ball, this.paddle, ...brick];

        new InputHandler(this.paddle, this);
    };
    this.updateGame = function (deltaTime) {
        if(this.gamestate == GAME_STATE.PAUSED) return;
        // this.paddle.update(deltaTime);
        // this.ball.update(deltaTime);

        // this.gameObjects.forEach(object => object.update(deltaTime));
        this.gameObjects.forEach(function (obj) {
            obj.update(deltaTime);
        });
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);

    };
    this.drawGame = function (ctx) {
        // this.paddle.draw(ctx);
        // this.ball.draw(ctx);
        // this.gameObjects.forEach(object => object.draw(ctx));
        this.gameObjects.forEach(function (obj) {
            obj.draw(ctx);
        });

        if(this.gamestate == GAME_STATE.PAUSED){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
        }

    };

    this.togglePause = function () {
        if(this.gamestate == GAME_STATE.PAUSED){
            this.gamestate = GAME_STATE.RUNNING;
        } else {
            this.gamestate = GAME_STATE.PAUSED;
        }
    }


}