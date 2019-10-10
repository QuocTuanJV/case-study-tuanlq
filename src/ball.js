function Ball() {
    this.image = document.getElementById("img_ball");
    
    this.drawBall = function () {
        ctx.drawImage(this.image,100,100,50,50);
    };
    this.updatePositionBall = function () {
        
    }
}