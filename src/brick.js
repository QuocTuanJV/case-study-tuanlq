function Brick(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;

    this.game = game;
    this.width = 80;
    this.height = 24;
    this.markedForDeletion = false;
    this.update =  function () {
        if(detectionCollision(this.game.ball,this)){
            this.game.ball.speedBall.y = - this.game.ball.speedBall.y;
            this.markedForDeletion = true;
            this.game.mscore.score++;
        }
    };
    this.draw = function (ctx) {
        ctx.drawImage(this.image,this.position.x,this.position.y,this.width,this.height);
    };
}