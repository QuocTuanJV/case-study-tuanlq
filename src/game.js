const GAME_STATE = {
    PAUSED: 0,
    RUNNING:1,
    MENU: 2,
    GAME_OVER: 3
}
function Game(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAME_STATE.MENU;
    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
    this.gameObjects = [];
    this.bricks = [];
    new InputHandler(this.paddle, this);
    this.lives = 3;
    this.levels = [level1,level2];
    this.currentLevel = 0;

    this.startGame = function () {
        if(this.gamestate !== GAME_STATE.MENU ) return;
        this.bricks = buildingLevel(this,this.levels[this.currentLevel]);

        this.gameObjects = [this.ball, this.paddle];
        this.gamestate = GAME_STATE.RUNNING;


    };
    this.updateGame = function (deltaTime) {
        if(this.lives === 0 ) this.gamestate = GAME_STATE.GAME_OVER;

        if (this.gamestate == GAME_STATE.PAUSED || this.gamestate == GAME_STATE.MENU || this.gamestate == GAME_STATE.GAME_OVER) return;
        // this.gameObjects.forEach(object => object.update(deltaTime));
        if(this.bricks.length === 0){
            this.currentLevel++;
            this.startGame();
        }

        [...this.gameObjects,...this.bricks].forEach(function (obj) {
            obj.update(deltaTime);
        });
        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);

    };
    this.drawGame = function (ctx) {
        // this.gameObjects.forEach(object => object.draw(ctx));
        [...this.gameObjects,...this.bricks].forEach(function (obj) {
            obj.draw(ctx);
        });

        if(this.gamestate == GAME_STATE.PAUSED){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("PAUSED", this.gameWidth/ 2, this.gameHeight/ 2);
        }
        if(this.gamestate == GAME_STATE.MENU){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("press SPACEBAR to Start", this.gameWidth/ 2, this.gameHeight/ 2);
        }
        if(this.gamestate == GAME_STATE.GAME_OVER){
            ctx.rect(0,0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth/ 2, this.gameHeight/ 2);
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