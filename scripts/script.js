let userScore = 0;
let computerScore = 0;

function playRound() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
} else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
} else {computerChoice = "scissors" };
        let userChoice = prompt("Rock, paper, scissors?").toLowerCase();
        if (userChoice === computerChoice) {console.log("Tie game")
        } else if (userChoice === "rock" && computerChoice === "scissors") {
            console.log("You win!");
            userScore++;
        } else if (userChoice === "rock" && computerChoice === "paper") {
            console.log("Paper beats rock. Oof, sorry. You lose bud");
            computerScore++;
        } else if (userChoice === "paper" && computerChoice === "rock") {
            console.log("Congrats big dog. You win!");
            userScore++;
        } else if (userChoice === "paper" && computerChoice === "scissors") {
            console.log("Ouch, that's gotta hurt. Better luck next time");
            computerScore++;
        } else if (userChoice === "scissors" && computerChoice === "paper") {
            console.log("Great job");
            userScore++;
        } else if (userChoice === "scissors" && computerChoice === "rock") {
            console.log("Not today bud");
            computerScore++
        }

    console.log("Computer choice: " + computerChoice);
    console.log("User choice: " + userChoice);
    console.log("Computer score: " + computerScore);
    console.log("User score: " + userScore);
}

for (i = 0; i < 1000; i++) {
    playRound();
    if (userScore === 5) {
        console.log("User wins!");
        break
    }
    else if (computerScore === 5) {
        console.log("Computer wins!");
        break
    }

}