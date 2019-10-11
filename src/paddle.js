function Paddle(game) {
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.width = 150;
    this.height =  30;
    this.maxSpeed = 10;
    this.speed = 0;
    this.positionPaddle = {
        x: game.gameWidth / 2 - this.width/2,
        y: game.gameHeight - this.height - 10
    };

   this.draw = function(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.positionPaddle.x, this.positionPaddle.y,this.width,this.height);
    };
    this.update = function (deltaTime) {
        this.positionPaddle.x += this.speed;
        if(this.positionPaddle.x < 0) {
            this.positionPaddle.x = 0
        }
        if(this.positionPaddle.x + this.width > this.gameWidth){
            this.positionPaddle.x = this.gameWidth - this.width;
        }
    };
    this.moveLeft = function () {
        this.speed = -this.maxSpeed;
    };
    this.moveRight = function () {
        this.speed = this.maxSpeed;
    };
    this.stop = function () {
        this.speed = 0;
    }

}
