let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrng = document.getElementById('wrng');
let guesses = document.getElementById('line');

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let numGuesses = 0;

btn.addEventListener('click', function() {
    guessesNumber();
});

function guessesNumber() {
    let userGuess = parseInt(input.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrng.textContent = 'Enter a number between 1 and 100.';
        input.value = '';
        return;
    }

    numGuesses++;
    guesses.innerHTML = 'No. of guesses: ' + numGuesses;

    if (userGuess > answer) {
        wrng.innerHTML = 'You guessed too high!';
    } else if (userGuess < answer) {
        wrng.innerHTML = 'You guessed too low!';
    } else {
        wrng.innerHTML = 'Congratulations! You guessed the correct number!';
        btn.disabled = true;  // Disable button after correct guess
        input.disabled = true;  // Disable input after correct guess
        setTimeout(() => {
            resetGame();
        }, 5000);
    }

    input.value = '';
}

function resetGame() {
    numGuesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value = '';
    guesses.innerHTML = 'No. of guesses: 0';
    wrng.innerHTML = '';  // Clear message
    btn.disabled = false;  // Enable button
    input.disabled = false;  // Enable input
}
