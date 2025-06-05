class Space {
    constructor(row,col,board){
        this.row = row;
        this.col = col;
        this.board = board;
        this.id = `row${row}-col${col}`
        this.tiles = []
    }

    drawSpace(boardId){
        let board = document.getElementById(boardId);
        let space = document.createElement('div');
        space.id = this.id;
        space.classList.add('grid-slot');
        board.appendChild(space);
    }

    addTile(tile){
        this.tiles.push(tile);
    }
}