function Score(game) {
    this.score = 0;
    this.game = game;
    this.draw = function (ctx) {
        ctx.font = "30px Arial";
        ctx.fillText("Score: " + this.score, 100, 50);
    }
    this.update = function (deltaTime) {

    }
}