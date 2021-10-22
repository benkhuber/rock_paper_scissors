let userScore = 0;
let computerScore = 0;

function playRock() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "rock") {
            roundAnnounce.textContent = "TIE GAME!"
            console.log("Computer: Rock");
            console.log("User: Rock");    
            console.log("Tie game")
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
    } else if (computerChoice === "paper") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            console.log("Computer: Paper");
            console.log("User: Rock");
            console.log("Paper beats rock. Oof, sorry. You lose bud");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            compScore.textContent = "Computer Score: " + computerScore;
    } else if (computerChoice === "scissors") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            console.log("Computer: Scissors");
            console.log("User: Rock");
            console.log("You win!");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            playerScore.textContent = "User Score: " + userScore;
        }
    }

function playPaper() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "paper") {
            roundAnnounce.textContent = "TIE GAME!"
            console.log("Computer: Paper");
            console.log("User: Paper");    
            console.log("Tie game")
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
    } else if (computerChoice === "rock") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            console.log("Computer: Rock");
            console.log("User: Paper");
            console.log("You win!");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            playerScore.textContent = "User Score: " + userScore;
    } else if (computerChoice === "scissors") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            console.log("Computer: Scissors");
            console.log("User: Paper");
            console.log("Paper beats rock. Oof, sorry. You lose bud");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            compScore.textContent = "Computer Score: " + computerScore;
        }
    }

function playScissors() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "scissors") {
            roundAnnounce.textContent = "TIE GAME!"
            console.log("Computer: Scissors");
            console.log("User: Scissors");    
            console.log("Tie game")
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
    } else if (computerChoice === "rock") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            console.log("Computer: Rock");
            console.log("User: Scissors");
            console.log("Rock smash scissors");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            compScore.textContent = "Computer Score: " + computerScore;
    } else if (computerChoice === "paper") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            console.log("Computer: Paper");
            console.log("User: Scissors");
            console.log("You win!");
            console.log("User Score: " + userScore);
            console.log("Computer Score: " + computerScore);
            playerScore.textContent = "User Score: " + userScore;
        }
    }

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRock();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playPaper();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playScissors();
});

const playerScore = document.createElement('div');
playerScore.style.backgroundColor = "lightblue";
playerScore.textContent = "User Score: " + userScore;
container.appendChild(playerScore);

const compScore = document.createElement('div');
compScore.style.backgroundColor = "pink";
compScore.textContent = "Computer Score: " + computerScore;
container.appendChild(compScore);

const roundAnnounce = document.createElement('div');
roundAnnounce.style.backgroundColor = "teal";
roundAnnounce.textContent = "Who will win!"
container.appendChild(roundAnnounce);


/* function playRound() {
    let computerChoice = Math.random();
    let userChoice = ["rock", "paper", "scissors"]
    if (computerChoice < 0.34) {computerChoice = "rock"
} else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
} else {computerChoice = "scissors" };
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
 */

/* for (i = 0; i < 1000; i++) {
    playRound();
    if (userScore === 5) {
        console.log("User wins!");
        break
    }
    else if (computerScore === 5) {
        console.log("Computer wins!");
        break
    }

} */
