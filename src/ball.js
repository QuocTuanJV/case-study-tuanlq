function Ball(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.imageBall = document.getElementById("img_ball");
    this.speedBall = {
        x: 5,
        y: -5

    };
    this.game = game;
    this.positionBall = {
        x: 5,
        y: 400,
    };

    this.sizeBall = 30;
    this.resetGame = function () {
        this.speedBall = {
            x: 5,
            y: -5

        };

        this.positionBall = {
            x: 5,
            y: 400,
        };

    };

    this.draw = function (ctx) {
        ctx.drawImage(this.imageBall, this.positionBall.x, this.positionBall.y, this.sizeBall, this.sizeBall);
    };
    this.update = function (deltaTime) {
        this.positionBall.x += this.speedBall.x;
        this.positionBall.y += this.speedBall.y;
        if(this.positionBall.x + this.sizeBall > this.gameWidth || this.positionBall.x < 0){
            this.speedBall.x = - this.speedBall.x;
        }
        if(this.positionBall.y < 0){
            this.speedBall.y = - this.speedBall.y;
        }
        if(this.positionBall.y + this.sizeBall > this.gameHeight){
            this.game.lives--;
            this.resetGame();
        }

        if(detectionCollision(this,this.game.paddle)){
            this.speedBall.y = -this.speedBall.y;
            this.positionBall.y = this.game.paddle.position.y - this.sizeBall;
        }
    }
}