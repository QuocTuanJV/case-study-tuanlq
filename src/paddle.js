function Paddle(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.width = 150;
    this.height =  30;
    this.maxSpeed = 5;
    this.speed = 0;
    this.position = {
        x: gameWidth / 2 - this.width/2,
        y: gameHeight - this.height - 10
    };

   this.drawPaddle = function(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y,this.width,this.height);
    };
    this.updatePositionPaddle = function (deltaTime) {
        if(!deltaTime) return;
        this.position.x += this.speed;
        if(this.position.x < 0) {
            this.position.x = 0
        }
        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
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
