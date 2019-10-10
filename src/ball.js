function Ball(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.imageBall = document.getElementById("img_ball");
    this.speedBall = {
        x: 1,
        y: 1

    };
    this.game = game;
    this.positionBall = {
        x: 10,
        y: 10,
    };

    this.sizeBall = 50;

    this.draw = function (ctx) {
        ctx.drawImage(this.imageBall, this.positionBall.x, this.positionBall.y, this.sizeBall, this.sizeBall);
    };
    this.update = function (deltaTime) {
        this.positionBall.x += this.speedBall.x;
        this.positionBall.y += this.speedBall.y;
        if(this.positionBall.x + this.sizeBall > this.gameWidth || this.positionBall.x < 0){
            this.speedBall.x = - this.speedBall.x;
        }
        if(this.positionBall.y + this.sizeBall > this.gameHeight || this.positionBall.y < 0){
            this.speedBall.y = - this.speedBall.y;
        }

    }
}