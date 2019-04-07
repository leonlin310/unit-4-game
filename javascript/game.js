//declare our variables
var wins = 0;
var losses = 0;
var points = 0;
var computerNumber;
var hammerVal;
var axeVal;
var panVal;
var swordVal;
var counter = 0;


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


$(document).ready(function () {

    $(".start-button").on("click", function () {
        console.log("i've been touched");
        $(this).fadeOut("slow");
        $(".display-4").text("WHAAAATT");
        $(".lead").text("DID THAT BUTTON JUST DISSAPEAR? ");
        $(".exp").text("Yes. Yes it did").delay(4000).fadeOut("slow");

        resetGame();
    })


    // resetGame();



    //TODO:  Test Logic. THIS WAS THE WORKING CODE
    $(document).on("keyup", function (event) {
        console.log("Key up", event.key);
        var playerLetter = event.key;

        if (playerLetter === "y") {
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
    function resetGame() {

        //  Have Computer Pick a Number       
        computerNumber = pickComputerNumber(19, 120);
        console.log("Computer Picks", computerNumber);
        $("h4").text(computerNumber);

        // Have a loop number randomly assigned for Crystals
        hammerVal = pickCrystalNumber(1, 12);
        console.log("Hammer damage is: ", hammerVal);
        axeVal = pickCrystalNumber(1, 12);
        console.log("Axe damage is: ", axeVal);
        panVal = pickCrystalNumber(1, 12);
        console.log("Pan damage is: ", panVal);
        swordVal = pickCrystalNumber(1, 12);
        console.log("Sword damage is: ", swordVal);

        // Create IF statement so if any weapon value = another weapon value, re-run function resetGame
        if ((hammerVal == axeVal) || (hammerVal == panVal) || (hammerVal == swordVal) || (axeVal == panVal) || (axeVal == swordVal) || (panVal == swordVal)) {
            resetGame();
        };

        // Assign an HP value to the monster





    }

    // Attach a click event to each picture and assign a value to it
    $(".hammerPic").on("click", function () {
        counter += hammerVal;
        $("h3").text(counter);
        console.log("Hammer's current damage is: ", hammerVal);
        console.log("Computers random number is: ", computerNumber);
        console.log("Cumulative damage is: ", counter);
        console.log("----------------------------------")


        if (counter === computerNumber) {
            wins++;
            counter = 0;
            hammerVal = 0;
            resetGame();
            updateScoreboard();
        }

        else if (counter >= computerNumber) {
            losses++;
            counter = 0;
            hammerVal = 0;
            resetGame();
            updateScoreboard();
        }

    });

    $(".axePic").on("click", function () {
        counter += axeVal;
        $("h3").text(counter);
        console.log("Axe's current damage is: ", axeVal);
        console.log("Computers random number is: ", computerNumber);
        console.log("Cumulative damage is: ", counter);
        console.log("----------------------------------")

        if (counter === computerNumber) {
            wins++;
            counter = 0;
            axeVal = 0;
            resetGame();
            updateScoreboard();
        }

        else if (counter >= computerNumber) {
            losses++;
            counter = 0;
            axeVal = 0;
            resetGame();
            updateScoreboard();
        }

    });

    $(".panPic").on("click", function () {
        counter += panVal;
        $("h3").text(counter);
        console.log("Frying Pan's current damage is: ", panVal);
        console.log("Computers random number is: ", computerNumber);
        console.log("Cumulative damage is: ", counter);
        console.log("----------------------------------")

        if (counter === computerNumber) {
            wins++;
            counter = 0;
            panVal = 0;
            resetGame();
            updateScoreboard();
        }

        else if (counter >= computerNumber) {
            losses++;
            counter = 0;
            panVal = 0;
            resetGame();
            updateScoreboard();
        }

    });

    $(".swordPic").on("click", function () {
        counter += swordVal;
        $("h3").text(counter);
        console.log("Sword's current damage is: ", swordVal);
        console.log("Computers random number is: ", computerNumber);
        console.log("Cumulative damage is: ", counter);
        console.log("----------------------------------")

        if (counter === computerNumber) {
            wins++;
            counter = 0;
            swordVal = 0;
            resetGame();
            updateScoreboard();
        }

        else if (counter >= computerNumber) {
            losses++;
            counter = 0;
            swordVal = 0;
            resetGame();
            updateScoreboard();
        }

    });


    // Create a function that updates the wins/losses
    function updateScoreboard() {
        $("#wins").text(wins);
        $("#losses").text(losses);
    }
});

