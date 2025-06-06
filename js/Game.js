class Game {
    constructor(){
        this.board = new Board();
        this.ready = false;
    }

    startGame(){
        this.board.drawBoard();
        this.board.addTile();
        this.board.addTile();
        this.board.printBoard();
        this.ready = true;
    }

    

    handleKeyDown(event){
        if(this.ready === true){
            if(this.board.move(event.key)){
                $.when($('.tile:animated').length === 0).then(()=>{
                    setTimeout(()=>{
                        this.board.addTile();
                        if(this.board.canMove()){
                            this.ready = true;
                        }
                        else{
                            this.ready = false;
                        }
                    },150);
                    
                });
            }
        }
        
    }
}