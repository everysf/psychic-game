// declaring initial variables
var wins = 0;
var losses = 0;
var guessLimit = 7;

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var usedLetters = [];

var computerGuess = alphabet[(Math.floor(Math.random() * alphabet.length))];

console.log("Computer guessed: " + computerGuess);

document.onkeyup = function(event){

    var userGuess = event.key;

    if (alphabet.indexOf(userGuess) < 0) {
        alert("Press a letter.")
        return
    }

    guessLimit--;
    document.getElementById("guessCount").innerHTML = guessLimit;

    if (guessLimit < 1) {
        losses++;
        document.getElementById("loseCount").innerHTML = losses;
        guessLimit = 7;
        document.getElementById("guessCount").innerHTML = guessLimit;
        usedLetters = [];
    }

    if (usedLetters.indexOf(userGuess) > -1) {
        alert("Already guessed.")
        return
    }

    if (userGuess === computerGuess) {
        wins++;
        computerGuess = alphabet[(Math.floor(Math.random() * alphabet.length))];
        guessLimit = 7;
        document.getElementById("guessCount").innerHTML = guessLimit;
        document.getElementById("winCount").innerHTML = wins;
        usedLetters = [];
        document.getElementById("usedLetters").innerHTML = usedLetters;
        console.log("Computer guessed: " + computerGuess);
    } else {
        usedLetters.push(userGuess);
        document.getElementById("usedLetters").innerHTML = usedLetters;
    };
};