//declare our variables
var wins = 0;
var losses = 0;
var points = 0;
var targetScore = "";
var computerNumber;
//reset
resetGame();







    // Code pulled from stackoverflow
function resetGame(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

computerNumber = resetGame(19,120);   
console.log("COMPUTER NUMBER = ", computerNumber);

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let computerNumber = getRandomInt(19,120);
// console.log(computerNumber);



// Reset the Game
