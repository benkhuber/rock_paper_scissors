function playRound() {
    let userChoice = prompt("Rock, paper, scissors?")
    let computerChoice = Math.floor(Math.random()*3);
    let userScore = 0;
    let computerScore = 0;

    if (computerChoice === 0) {computerChoice = "rock"
        } else if (computerChoice === 1) {computerChoice = "paper"
        } else {computerChoice = "scissors"}

    function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {console.log("Tie game!")

    } if (userChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        console.log("Oof, sorry. You lose bud");
    } else if (userChoice === "paper" && computerChoice === "rock") {
        console.log("Congrats big dog. You win!");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        console.log("Ouch, that's gotta hurt. Better luck next time");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        console.log("Great job");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        console.log("Not today bud");
    }
    }

    compare();
    console.log(computerChoice);
    console.log(userChoice);
}


playRound();
playRound();
playRound();
playRound();
playRound();