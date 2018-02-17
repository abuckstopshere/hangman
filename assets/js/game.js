//I wouldn't recommend changing these names. These id names match the layout if you change these names here make sure you change it on your html page as well.
var ids = [`hangmanWord`, `wrongGuesses`, `guessesLeft`, `winCounter`, `lossCounter`];
//finish declaring the rest of the variables we need. 
///**** Hint use the names in the ids array to finish the last 3 variables we need
var answerWord = [""];
var winCounter = 0;
var lossCounter = 0;
//add missing 3 variables named
var hangmanWord = [""]
var wrongGuesses = [""]
var guessesLeft = 8
//Add how many names you want to this word bank. All names need to be lowercase.
var wordBank = ['football', 'soccer', 'basketball', 'rugby', 'hockey' , 'tennis' , 'yoga' , 'surfing' , 'snowboarding' , 'frisbee']
//Valid characters we want to accept
var validLetters = Array.from('abcdefghijklmnopqrstuvwxyz');
//Randomize and return
function randomize(arr) {
    // [0,1,2,3,4].length = 5
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]
}
function hideWord(arr) {
    //Please fill in what we want our array to be full of. You can add any symbol you want right now we have it full of *. This should be what the user sees when it is a brand new fresh game.
    return Array(arr.length).fill('_');
}
function updateLetters(letter) {
    for (var i = 0; i < answerWord.length; i++) {
        //the for loop runs through all of the words letters
        // now if a letter matches, the if (below) comes in to play
        if (letter === answerWord[i]) {
            var answerWordletter = answerWord[i]
            hangmanWord[i] = answerWordletter;
            hangmanWord[i] = answerWord[i];
        }
    }
}
//Explain what the updateLetters function is doing.

// update letters is taking the parameter of input letter 
// and checking to see if it exists in an array of the chosen word
// if the letter does exist in the word the updateLetters function
// adds that letter to the current index of hangmanWord 
// (while also making sure it is not the only instance of that letter being in the word; if it is it will perform the same function)

function updateGuesses(letter) {
    //Write the code needed to 
    //add this letter to the wrong guesses array 
    wrongGuesses.push(letter)
    guessesLeft -= 1
}
//subtract 1 from the guesses left number
//The key is the user's inputted key.
function validateInput(inputKey) {
    // Whenever a return is executed it breaks out of the function. 
    // So if validLetters.indexOf(key) === -1 is true then i would return false. This prevents the rest of the code inside this code block from running.
    // This condition Makes sure an a-z key is pressed.
    // if not it returns a value of -1 because -1 is not a valid value
    if (validLetters.indexOf(inputKey) === -1) return false;
    // This condition Makes sure key cant be guessed again.
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again.
    if (wrongGuesses.indexOf(inputKey) >= 0) return false;
    // This condition Makes sure hangman keys cant be pressed again
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again. 
    if (hangmanWord.indexOf(inputKey) >= 0) return false;
    return true;
}
function takeTurn(letter) {
    //Add an if/else statement here.
    if (answerWord.indexOf(letter) >= 0) {
        updateLetters(letter)
    }
    //if the letter is in the answerWord i should see a call to the updateLetters function
    else {
        updateGuesses(letter)
    }
    //otherwise i should see a call to the the updateGuesses function
    // keep this line here
    print(ids);
}
function updateScore() {
    //Add an if/else statement here.
    if (hangmanWord.indexOf('_') === -1) {
        updateWin()
        startGame()
    }
    //if the user wins i should see a call to updateWin
    else if (guessesLeft == 0) {
        updateLoss()
        startGame()
    }
    //or if the user loses i should see a call to the updateLoss
}
function updateWin() {
    //add what happens if the user wins code here
    winCounter += 1
    startGame()
        //Make a call to the startGame function here. 
        //This call is here to start the game once a player wins.
}
function updateLoss() {
    //add what happens if the user loses code here
    lossCounter += 1
    startGame()
        //Make a call to the startGame function here.
        //This call is here to start the game once a player losses.
}
//This function takes an arr for an argument (we use it for our id array)
function print(arr) {
    arr.forEach(function(idName) {
        // If the idName variable is an array do this
        if (Array.isArray(idName)) {
            document.getElementById(idName).textContent = window[idName].join('')
        }
        // If the idName variable is any other type besides array do this
        else {
            document.getElementById(idName).textContent = window[idName];
        }
    });
}
//explain what the print function is doing.

// print is taking a parameter of array then running the array
// through an anonymous function that checks if the array is an array
// if it is, it joins the text together inside the array


/* 
Add your board setup functions and or code here
The wrongGuesses variable needs to be an array
The hangmanWord variable needs to be an array
The guessesLeft variable needs to be an Integer
The winCounter variable needs to be an Integer
The lossCounter variable needs to be an Integer
*/
function startGame() {
    wrongGuesses = []
    answerWord = randomize(wordBank)
    hangmanWord = hideWord(answerWord)
    guessesLeft = 8
    print(ids)
}
//keyup event
//This is how our player is interacting with our game.
//This drives all the game mechanics.
document.addEventListener('keyup', function(event) {
    if (validateInput(event.key)) {
        //make a call to the takeTurn Function
        takeTurn(event.key)
            //make a call to the updateScore function
        updateScore()
    };
});
//This makes the first call (initial) call to start the game.
startGame()