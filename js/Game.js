class Game {
    constructor(){
        this.board = new Board();
        this.ready = false;
    }

    startGame(){
        this.board.drawBoard();
        this.board.addTile();
        this.board.addTile();
        this.ready = true;
        
        
    }
}