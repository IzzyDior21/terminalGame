const readline = require(`readline-sync`)


// MathVariables

const secretNumber = Math.floor(Math.random() * 10) + 1;
//math.floor is saying whatever # you get round it down to 9. Also prevents the CPU  from generating decimal numbers, and only gives us whole numbers.
// Math.random is going to randomize  the number up to 10: +1 is going to start at 1

let guess = null;

console.log("Welcome to the number guessing game");
console.log("Guess a number between 1 and 10");

//GAME BUILDING

while (guess !== secretNumber) {
    
    guess = readline.question("Enter  your guess: ");

    // anytime a var is declared inside a loop that var stays within that scope.
   // When the user makes a guess run an if else statement.
 
   if (guess === secretNumber) {
    console.log("🍕 Congratz🍕 You guessed right!!");
   } else if (guess > secretNumber) {
        console.log("You guess is too high!!");
        
   } else {
    console.log("Your guess is too low!!");
    
   }
}


// install npm readline-sync if you want to use this again
