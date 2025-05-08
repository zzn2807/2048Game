let tile = document.querySelector('.tile');
let numDivs = 40;
let tileWidthPercentage = 0.8;
let numTilesPerRowPerCol = 4;

let tileCoord = {row: 0, col: 0};

window.addEventListener("keydown",(e)=>{
    if(e.keyCode === 39){
        moveRight(tileCoord,{row: tileCoord.row, col: 3});
    }

    else if(e.keyCode === 37){
        moveLeft(tileCoord,{row: tileCoord.row, col: 0});
    }

    else if(e.keyCode === 38){
        moveUp(tileCoord,{row: 0, col: tileCoord.col});
    }
    else if(e.keyCode === 40){
        moveDown(tileCoord, {row:3, col: tileCoord.col});
    }
    
});

function coordConversion(coord){
    let gap = ((1-tileWidthPercentage)/2)*(1/numTilesPerRowPerCol)*numDivs; //number of divs representing 1 gap
    let tileWidth = gap*(2*tileWidthPercentage/(1-tileWidthPercentage)); //gap divs * ratio of tileWidth to gaps
    let newCoordCol = 1+gap+ 2*gap*coord.col + tileWidth*coord.col;
    let newCoordRow = 1+gap+ 2*gap*coord.row + tileWidth*coord.row;
    return {row:newCoordRow, col:newCoordCol};
}

function moveRight(startCoord, endCoord){
    let animArr = [];
    let newStartCoord = coordConversion(startCoord);
    let newEndCoord =  coordConversion(endCoord);
    let gap = ((1-tileWidthPercentage)/2)*(1/numTilesPerRowPerCol)*numDivs; //number of divs representing 1 gap
    let tileWidth = gap*(2*tileWidthPercentage/(1-tileWidthPercentage)); //gap divs * ratio of tileWidth to gaps
    let divs = Array.from(Array(newEndCoord.col - newStartCoord.col + 1).keys());
    divs.forEach((i)=>{
        animArr.push({gridColumn: `${divs[i]+ newStartCoord.col} / ${divs[i] + newStartCoord.col +tileWidth}` });
    });
    const animation = tile.animate(animArr,{duration: 100, easing: 'ease-out'});
    animation.onfinish = ()=>{tile.style.gridColumn = animArr.at(-1).gridColumn};
    tileCoord = endCoord;
    console.log(tileCoord);
}

function moveLeft(startCoord, endCoord){
    let animArr = [];
    let newStartCoord = coordConversion(startCoord);
    let newEndCoord =  coordConversion(endCoord);
    let gap = ((1-tileWidthPercentage)/2)*(1/numTilesPerRowPerCol)*numDivs; //number of divs representing 1 gap
    let tileWidth = gap*(2*tileWidthPercentage/(1-tileWidthPercentage)); //gap divs * ratio of tileWidth to gaps
    let divs = Array.from(Array(newStartCoord.col - newEndCoord.col + 1).keys());
    divs.forEach((i)=>{
        animArr.push({gridColumn: `${newStartCoord.col - divs[i]} / ${newStartCoord.col - divs[i] + tileWidth}` });
    });
    const animation = tile.animate(animArr,{duration: 100, easing: 'ease-out'});
    animation.onfinish = ()=>{tile.style.gridColumn = animArr.at(-1).gridColumn};
    tileCoord = endCoord;
    console.log(tileCoord);
}

function moveUp(startCoord, endCoord){
    let animArr = [];
    let newStartCoord = coordConversion(startCoord);
    let newEndCoord =  coordConversion(endCoord);
    let gap = ((1-tileWidthPercentage)/2)*(1/numTilesPerRowPerCol)*numDivs; //number of divs representing 1 gap
    let tileWidth = gap*(2*tileWidthPercentage/(1-tileWidthPercentage)); //gap divs * ratio of tileWidth to gaps
    let divs = Array.from(Array(newStartCoord.row - newEndCoord.row + 1).keys());
    divs.forEach((i)=>{
        animArr.push({gridRow: `${newStartCoord.row - divs[i]} / ${newStartCoord.row - divs[i] + tileWidth}` });
    });
    const animation = tile.animate(animArr,{duration: 100, easing: 'ease-out'});
    animation.onfinish = ()=>{tile.style.gridRow = animArr.at(-1).gridRow};
    tileCoord = endCoord;
    console.log(tileCoord);
}

function moveDown(startCoord, endCoord){
    let animArr = [];
    let newStartCoord = coordConversion(startCoord);
    let newEndCoord =  coordConversion(endCoord);
    let gap = ((1-tileWidthPercentage)/2)*(1/numTilesPerRowPerCol)*numDivs; //number of divs representing 1 gap
    let tileWidth = gap*(2*tileWidthPercentage/(1-tileWidthPercentage)); //gap divs * ratio of tileWidth to gaps
    let divs = Array.from(Array(newEndCoord.row - newStartCoord.row + 1).keys());
    divs.forEach((i)=>{
        animArr.push({gridRow: `${divs[i]+ newStartCoord.row} / ${divs[i] + newStartCoord.row +tileWidth}` });
    });
    const animation = tile.animate(animArr,{duration: 100, easing: 'ease-out'});
    animation.onfinish = ()=>{tile.style.gridRow = animArr.at(-1).gridRow};
    tileCoord = endCoord;
    console.log(tileCoord);
}