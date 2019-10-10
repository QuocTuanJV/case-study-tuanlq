function Ball(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.imageBall = document.getElementById("img_ball");
    this.speedBall = {
        x: 2,
        y: 2

    };
    this.positionBall = {
        x: 10,
        y: 10,
    };

    this.sizeBall = 50;

    this.drawBall = function () {
        ctx.drawImage(this.imageBall, this.positionBall.x, this.positionBall.y, this.sizeBall, this.sizeBall);
    };
    this.updatePositionBall = function (deltaTime) {
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