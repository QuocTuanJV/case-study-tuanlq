function Brick(game, position) {
    this.image = document.getElementById("img_brick");
    this.positionBrick = position;

    this.game = game;
    this.widthBrick = 52;
    this.heightBrick = 24;
    this.update =  function () {

    };
    this.draw = function (ctx) {
        ctx.drawImage(this.image,this.positionBrick.x,this.positionBrick.y,this.widthBrick,this.heightBrick);
    };
}