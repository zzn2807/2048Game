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

    printBoard(){
        let board = '';
        for(let row of this.spaces){
            for(let space of row){
                board += `| ${space.tiles[0]?space.tiles[0].value: ' '} |`
            }
            board+='\n';
        }
        console.log(board);
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
        let randVal = Math.random()>0.9? 4 : 2;
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
            space.addTile(tile);
            tile.drawTile();
            this.tile_counter++;
            // setTimeout(()=>{
            //     tile.slide(this.spaces[0][3]);
            //     return 1;
            // },1000);
        }
    }
    //Check if a row or column can slide
    slidable(rowOrCol){
        let canSlide = false;

        for(let spaceIdx = 0; spaceIdx<rowOrCol.length; spaceIdx++){
            //If there's an empty space
            if(rowOrCol[spaceIdx].tiles.length===0){
                return true;
            }
            //If two adjacent tiles are equal
            if(spaceIdx<rowOrCol.length-1){
                let curSpace = rowOrCol[spaceIdx];
                let nextSpace = rowOrCol[spaceIdx];
                if(curSpace.hasTile()&&nextSpace.hasTile()){
                    if(curSpace.getTile().value === nextSpace.getTile().value){
                        return true;
                    }
                }
            }

        }
        return false;
    }

    //Check if a move can be made at all
    canMove(){
        //Check for horizontal slidability
        for(let row of this.spaces){
            if(this.slidable(row)){
                return true;
            }
        }
        //Check for vertical slidability
        for(let colIdx = 0; colIdx < this.cols; colIdx++){
            if(this.slidable(this.spaces.map((row)=>row[colIdx]))){
                return true;
            }
        }
        return false;
    }

    move(direction){
        //If left
        if(direction.toLowerCase()==="arrowleft"){
            for(let row of this.spaces){
                let extremeIdx = 0;
                let curIdx = 1;
                while(curIdx<row.length){
                    let curSpace = row[curIdx];
                    let exSpace = row[extremeIdx];
                    //If Current space is empty, move to next space
                    if(!curSpace.hasTile()){
                        curIdx++;
                    }
                    //If current tile can slide into the extreme space, slide and then move to next space
                    else if(!exSpace.hasTile() || (exSpace.tiles.length<2&&curSpace.getTile().value === exSpace.getTile().value)){
                        console.log(`Sliding from ${curSpace.id} to ${exSpace.id}`)
                        let curTile = curSpace.tiles.pop();
                        exSpace.tiles.push(curTile);
                        curTile.space = exSpace;
                        curTile.slide(exSpace);
                        curIdx++;
                    }
                    //If current tile can't slide into next tile
                    else{
                        //If the current space and extreme space are adjacent, move to next space
                        if(curIdx-extremeIdx<=1){
                            curIdx++;
                        }
                        extremeIdx++;
                    }
                }
            }
        }
        //If right

        //If up

        //If down

    }

    collapseAllTiles(){
        for(let row of this.spaces){
            for(let space of row){
                if(space.hasTile()){
                    space.collapseTiles();
                }
            }
        }
    }
}