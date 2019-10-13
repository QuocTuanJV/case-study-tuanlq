function buildingLevel(game,level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {
      row.forEach((brick, brickIndex) => {
          let position = {
            x: 80 * brickIndex,
            y: 200 + 24 * rowIndex
          };
            if(brick === 1){
                bricks.push(new Brick(game, position))
            }
      }) ;
    });
    // return bricks;
    // for(let i=0; i<level1.length;i++){
    //     for(let j = 0; j < 10; j++ ){
    //         let position = {
    //             x: 80 * j,
    //             y: 24 * i
    //         };
    //         if(level1[i][j] === 1){
    //             bricks.push(new Brick(game, position))
    //         }
    //     }
    // }
    return bricks;
}
const level1 = [
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

];