class Board {
    constructor(){
        this.rows = 4;
        this.cols = 4;
        this.id = 'game-grid';
        this.tile_counter = 0;
        this.spaces = this.createSpaces();
    }

    createSpaces(){
        const spaces = [];
        for(let rowIdx = 0; rowIdx < this.rows; rowIdx++){
            let row = [];
            for(let colIdx = 0; colIdx < this.cols; colIdx++){
                let space = new Space(rowIdx,colIdx,this);
                row.push(space);
            }
            spaces.push(row)
        }
        
        return spaces;
    }

    drawBoard(){
        let board_container = document.querySelector('.container');
        let board = document.createElement('div');
        board.id = this.id;
        board_container.appendChild(board);
        for(let row of this.spaces){
            for(let space of row){
                space.drawSpace(this.id);
            }
        }

    }

    getFreeSpaces(){
        const freeSpaces = [];
        for(let row of this.spaces){
            for(let space of row){
                if(space.tiles.length==0){
                    freeSpaces.push(space);
                }
            }
        }
        return freeSpaces;
    }

    addTile(value){
        let randVal = Math.random()>0.8? 4 : 2;
        value = value | randVal;
        let freeSpaces = this.getFreeSpaces()
        if(freeSpaces.length<=0){
            return 0;
        }
        else{
            let spaceIdx = Math.floor(Math.random()*freeSpaces.length);
            let space = freeSpaces[spaceIdx];
            // let space = this.spaces[0][0];
            let tile = new Tile(space,value);
            tile.drawTile();
            // setTimeout(()=>{
            //     tile.slide(this.spaces[0][3]);
            //     return 1;
            // },1000);
        }
    }
}