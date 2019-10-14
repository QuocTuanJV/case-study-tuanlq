function InputHandler(paddle, game) {
    document.addEventListener('keydown', event => {
// x = event.clientX
        switch (event.keyCode) {
            case 37:
                paddle.moveLeft();
                break;
            case 39:
                paddle.moveRight();
                break;
            case 27:
                game.togglePause();
                break;
        }
    });

    document.addEventListener('keyup', event => {

        switch (event.keyCode) {
            case 37:
                if (paddle.speed < 0) {
                    paddle.stop();
                }
                break;
            case 39:
                if (paddle.speed > 0) {
                    paddle.stop();
                }
                break;

        }
    });
}