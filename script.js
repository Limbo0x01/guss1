let secretNumber = 50;  // Fixed number instead of random
let guesses = 0;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    guesses++;
    let message = document.getElementById('message');

    if (userGuess == secretNumber) {
        message.textContent = `Congratulations! You found the number in ${guesses} guesses. flag{basic_brute_force}`;
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too low, try again!';
    } else {
        message.textContent = 'Too high, try again!';
    }
}

document.getElementById('toggleCode').onclick = function() {
    let codeBlock = document.getElementById('jsCode');
    if (codeBlock.style.display === 'none') {
        codeBlock.style.display = 'block';
        codeBlock.textContent = `
let secretNumber = 50;  // Fixed number instead of random
let guesses = 0;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    guesses++;
    let message = document.getElementById('message');

    if (userGuess == secretNumber) {
        message.textContent = \`Congratulations! You found the number in \${guesses} guesses.\`;
    } else if (userGuess < secretNumber) {
        message.textContent = 'Too low, try again!';
    } else {
        message.textContent = 'Too high, try again!';
    }
}`;
    } else {
        codeBlock.style.display = 'none';
    }
};

