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

    hasTile(){
        return this.tiles.length>0;
    }

    getTile(){
        return this.tiles[0];
    }

    collapseTiles(){
        
        let newValue = this.getTile().value * this.tiles.length;
        //Delete tiles besides top tile
        while(this.tiles.length>1){
            let htmlTile = document.getElementById(this.tiles.pop().id);
            htmlTile.remove();
        }
        //Change top tile value
        let topTile = this.getTile()
        let topTileHTML = document.getElementById(topTile.id);
        topTileHTML.classList.remove(`tile-${topTile.value}`);
        topTileHTML.classList.add(`tile-${newValue}`);
        topTileHTML.innerHTML = newValue;
        topTile.value = newValue;
        
    }
}