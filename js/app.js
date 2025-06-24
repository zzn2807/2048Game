let touchstartX;
let touchstartY;
let touchendX;
let touchendY; 
let touchableElement = document.querySelector('body');
let game = new Game();
game.startGame();

document.addEventListener('keydown', function(event){
    game.handleKeyDown(event);
});

touchableElement.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

touchableElement.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);


function handleGesture() {
    if(Math.abs(touchstartX-touchendX)>Math.abs(touchstartY-touchendY)){
        if (touchendX < touchstartX) {
            console.log('Swiped Left');
            let event = {}
            event.key = "arrowleft"
            game.handleKeyDown(event)
        }

        if (touchendX > touchstartX) {
            console.log('Swiped Right');
            let event = {}
            event.key = "arrowright"
            game.handleKeyDown(event)
        }

    }
    else{
        if (touchendY < touchstartY) {
            console.log('Swiped Up');
            let event = {}
            event.key = "arrowup"
            game.handleKeyDown(event)
        }

        if (touchendY > touchstartY) {
            console.log('Swiped Down');
            let event = {}
            event.key = "arrowdown"
            game.handleKeyDown(event)
        }
    }
    
}