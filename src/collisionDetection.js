function detectionCollision(ball, gameObject) {
    let bottomOfBall = ball.positionBall.y + ball.sizeBall;
    let topOfBall = ball.positionBall.y;

    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;

    if ((bottomOfBall >= topOfObject) &&
        (topOfBall <= bottomOfObject) &&
        (ball.positionBall.x >= leftSideOfObject) &&
        (ball.positionBall.x <= rightSideOfObject))
    {
        return true;
    }
    else
        return false;
}