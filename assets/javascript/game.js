//starting number of wins, losses, and guesses left
var win = 0;
var loss = 0;
var guessesLeft = 9;

var userPick = [];

//array of all the guesses the computer could possibly make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var userChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

render ();

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    guessArray(userGuess);

    console.log(userGuess);
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess);

if (guessesLeft > 0) {
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") ||
    (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") ||
    (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") ||
    (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") ||
    (userGuess === "y") || (userGuess === "z")) {

    if (userGuess === computerGuess) {
        win++;
        guessesLeft = 9;
        userPick.splice(0,10);
        } else {
        guessesLeft--;
        }
      }
    }

//reset counter and tally loss, clear past guesses
if (guessesLeft === 0) {
	loss++;
	guessesLeft = 9;
	userPick.splice(0,10);
} 

//PSEUDOCODE 
//if event.key is not part of computerGuess array (e.g., number, enter key, tab etc.), do not print to guessArray

//do not print duplicate values to past guesses, do not decrement guessesLeft

//also, want to remove guesses whenever guessesLeft resets to 0!!!

    console.log(guessesLeft);

      render ();
    };


function render () {
        document.getElementById("win").innerHTML = win;
        document.getElementById("loss").innerHTML = loss;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("userGuess").innerHTML = userPick;
    }

function guessArray (val1) {
	userPick.push(val1);
}
