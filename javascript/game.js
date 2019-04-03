//declare our variables
var wins = 0;
var losses = 0;
var points = 0;
var computerNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

 // Function found on Stack Overflow for random number
    function pickComputerNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    
    // Function to pick random number for Crystal1
    function pickCrystalNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        }


        $(document).ready(function() {

        $(".start-button").on("click", function(){
            console.log("i've been touched");
            $(this).fadeOut("slow");
            $(".display-4").text("WHAAAATT");
            $(".lead").text("DID THAT BUTTON JUST DISSAPEAR? ");
            $(".exp").text("Yes. Yes it did").delay(4000).fadeOut("slow");
            
            resetGame();
        }) 

       
// resetGame();



// Test Logic

$(document).on("keyup", function(event){
    console.log("Key up", event.key);
    var playerLetter = event.key;

    if (playerLetter === "y"){
        wins++
        console.log("win");

        resetGame();
    }

    else {
        console.log("lose");
        losses++
    }
updateScoreboard();

});



    //Reset the game
    function resetGame(){

    //  Have Computer Pick a Number       
        computerNumber = pickComputerNumber(19,120);
        console.log("Computer Picks", computerNumber);

    // Have a loop number randomly assigned for Crystals
        crystal1 = pickCrystalNumber(1, 12);
        console.log("Crystal One Value is", crystal1);
        crystal2 = pickCrystalNumber(1, 12);
        console.log("Crystal Two Value is", crystal2);
        crystal3 = pickCrystalNumber(1, 12);
        console.log("Crystal Three Value is", crystal3);
        crystal4 = pickCrystalNumber(1, 12);
        console.log("Crystal Four Value is", crystal4);

        }
        
    // Create a function that updates the wins/losses
    function updateScoreboard(){
        $("#wins").text(wins);
        $("#losses").text(losses);
    }
        });