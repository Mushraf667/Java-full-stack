function guess(n) {
    let userGuess;

    while (true) {
        userGuess = Number(prompt("Enter a number:"));

        if (userGuess === n) {
            console.log("🎉 Congratulations! You guessed the number.");
            break;
        } else if (userGuess < n) {
            console.log("⬇️ Too low! Try again.");
        } else {
            console.log("⬆️ Too high! Try again.");
        }
    }
}
let number = Math.floor(Math.random() * 100) + 1;
guess(number);