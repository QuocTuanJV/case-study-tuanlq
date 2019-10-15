function Health(game) {
    this.health = 3;
    this.game = game;
    this.draw = function (ctx) {
        ctx.font = "30px Arial";
        ctx.fillText("Health: " + this.health, 100, 100);
    }
    this.update = function (deltaTime) {

    }
}