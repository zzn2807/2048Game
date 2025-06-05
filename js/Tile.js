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
        let newSpace = document.getElementById(target_space.id);
        let tile = document.getElementById(this.id);
        let tileRect = tile.getBoundingClientRect();
        let targetRect = newSpace.getBoundingClientRect();
        let duration = 200;
        // tile.animate(
        //     [
        //         //keyframes
        //         {transform: `translate(0px)`},
        //         {transform: `translate(${targetRect.left - tileRect.left}px,${targetRect.top - tileRect.top}px)`},
                
        //     ],
        //     {
        //         duration: duration,
        //         iterations: 1,
        //     },
        // );
        // setTimeout(()=>newSpace.appendChild(tile),duration);

        $(tile).animate({
            top: `${targetRect.top - tileRect.top}px`,
            left: `${targetRect.left - tileRect.left}px`
        },duration,'easeOutCubic', ()=>{})
        
    }
}