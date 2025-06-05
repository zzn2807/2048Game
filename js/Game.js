class Game {
    constructor(){
        this.board = new Board();
        this.ready = false;
    }

    startGame(){
        this.board.drawBoard();
        this.board.addTile(2);
        this.ready = true;
    }
}