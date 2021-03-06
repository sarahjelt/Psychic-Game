//starting number of wins, losses, and guesses left
var win = 0;
var loss = 0;
var guessesLeft = 9;

var userPick = [];

//array of all the guesses the computer could possibly make
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

render ();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    guessArray(userGuess);
    console.log(userGuess);
    console.log(computerGuess + " : computer's guess");

if (guessesLeft > 0) {
    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number

    if (userOptions.includes(userGuess) === true) {

        if (userGuess === computerGuess) {
            win++;
            guessesLeft = 9;
            userPick.splice(0,10);
            } else {
            guessesLeft--;
            }
          }
        }

//alert if user presses non a–z key
if (userOptions.includes(userGuess) === false) {
      alert("Psst — I'm thinking of a letter!");
      //userPick.pop();
    }

//reset counter and tally loss, clear past guesses
if (guessesLeft === 0) {
	loss++;
	guessesLeft = 9;
	userPick.splice(0,10);
}

//if guesses reset to 9, randomize computer guess again, so only at very beginning, after a win, and after a loss
if (guessesLeft >= 9) {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
}

    console.log(guessesLeft);
      render ();
};

function render () {
        document.getElementById("win").innerHTML = win;
        document.getElementById("loss").innerHTML = loss;
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
        document.getElementById("userGuess").innerHTML = userPick.join(" ");
    };

function guessArray (val1) {
	if (userPick.includes(val1) === true) {
        alert("You've already guessed that one!");
        guessesLeft++;
    } else if (userOptions.includes(val1) === true) {
	userPick.push(val1);
	}
  };
