//class - Its a blueprint for creating objects
//you can create as many objects with different names
class Game{
    score = 0;
    pause(){
        console.log("you paused the game");
    }
    exit(){
        console.log("you exited the game");
    }
} 
const player1 = new Game();
player1.score = 10;
console.log(player1.score);
player1.pause();


const player2 = new Game();
player1.score = 5;
console.log(player1.score);
player1.exit();