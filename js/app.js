let game = new Game();
game.startGame();

document.addEventListener('keydown', function(event){
    game.handleKeyDown(event);
});