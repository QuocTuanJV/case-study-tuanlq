function Brick(game, position) {
    this.image = document.getElementById("img_brick");
    this.position = position;

    this.game = game;
    this.widthBrick = 80;
    this.heightBrick = 24;
    this.update =  function () {

    };
    this.draw = function (ctx) {
        ctx.drawImage(this.image,this.position.x,this.position.y,this.widthBrick,this.heightBrick);
    };
}