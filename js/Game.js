class Game {
    constructor(){
        this.board = new Board();
        this.ready = false;
    }

    startGame(){
        this.board.drawBoard();
        this.board.addTile();
        this.board.addTile();
        this.board.updateMaxTile();
        this.board.printBoard();
        this.ready = true;
    }

    

    handleKeyDown(event){
        if(this.ready === true){
            this.ready = false
            if(this.board.move(event.key)){
                $.when($('.tile:animated').length === 0).then(()=>{
                    setTimeout(()=>{
                        if(this.board.check2048()){
                            alert(`You've won!!!`);
                            this.ready = false;
                            return;
                        }
                        this.board.addTile();
                        if(this.board.canMove()){
                            this.ready = true;
                        }
                        else{
                            console.log(`Can't Move`)
                            this.board.printBoard();
                            alert('There are no more moves to make. You have lost.')
                            this.ready = false;
                        }
                    },200)
                    
                    
                    
                });
            }
            else{
                this.ready = true
            }
        }
        
    }
}