function Cell() {
    this.gameBoardID = "game-board";
    this.width = 40;
    this.height = 40;
    this.left = 100;
    this.top = 100;
    this.valueEmpty ="";
    this.valueX = "X";
    this.valueO = "O";

        this.displayGameBoard = function () {
            let elementGameBoard = document.getElementById(this.gameBoardID);
            elementGameBoard.innerHTML = this.getCellHtml();
            this.drawCellValue();
        };
    this.getCellHtml = function () {
        let cellHtml = `<div id="cell" class="cell" style="position: absolute;width:${this.width}px;height:${this.height}px;left:${this.left}px;top:${this.top}px;line-height: 40px" onclick="play()"></div>`;
        return cellHtml;
    };
    this.drawCellValue = function () {
        let cellElement = "cell";
        let cellDiv = document.getElementById(cellElement);
        if(this)
        cellDiv.innerHTML = this.valueO;
    }

}