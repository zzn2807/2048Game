class Tile {
    constructor(space,value){
        this.space = space;
        this.value = value;
        this.id = `tile-${space.board.tile_counter}`;
    }

    drawTile(){
        let space = document.getElementById(this.space.id);
        let tile = document.createElement('div');
        tile.id = this.id;
        tile.innerHTML = this.value;
        tile.classList.add(`tile-${this.value}`);
        tile.classList.add(`tile`);
        space.appendChild(tile);
    }

    slide(target_space){
        let newSpace = document.getElementById(target_space.id);//New space html element
        let tile = document.getElementById(this.id); //This tile html element
        let tileRect = tile.getBoundingClientRect(); //Tile current coordinates
        let targetRect = newSpace.getBoundingClientRect();//New Space coordinates
        let duration = 200;//Sliding duration in ms
        //Slide to new space physically then place tile under new space in the DOM
        $(tile).animate({
            top: `${targetRect.top - tileRect.top}px`,
            left: `${targetRect.left - tileRect.left}px`
        },duration,'easeOutCubic', ()=>{
            $(tile).css({
                top: `0px`,
                left: `0px`
            })
            newSpace.appendChild(tile);
        })
        
    }
}