// Guess the Number Game
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = null; // The user's guess
let attempts = 0; // Counter for attempts
console.log("guess the number, you have as many tries as necessary")
while (guess !== randomNumber) {
    // Prompt user for a guess
    guess = prompt("Enter your guess (1-100):");
    // Convert guess to a number
    guess = Number(guess);
    // Validate user input
    if (isNaN(guess) || guess < 1 || guess > 100) {
        console.log("Invalid input. Please enter a number between 1 and 100.");
        continue;
        //internet command: isNaN tests for if a value is not a number
    }
    attempts++;
    // Check if the guess is correct, too high, or too low
    if (guess === randomNumber) {
        console.log(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
        break;
    } else if (guess > randomNumber) {
        console.log("Too high.");
    } else {
        console.log("Too low.");
    }
}
console.log("Thanks for playing!");

