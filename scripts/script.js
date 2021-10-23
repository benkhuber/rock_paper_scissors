let userScore = 0;
let computerScore = 0;

function playRock() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "rock") {
            roundAnnounce.textContent = "TIE GAME!"
    } else if (computerChoice === "paper") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            compScore.textContent = "Computer Score: " + computerScore;
    } else if (computerChoice === "scissors") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            playerScore.textContent = "User Score: " + userScore;
        }
    if (computerScore === 5) {
        alert("Computer wins!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";
    }
    if (userScore === 5) {
        alert("Player wins!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";
    }
    }

function playPaper() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "paper") {
            roundAnnounce.textContent = "TIE GAME!"
    } else if (computerChoice === "rock") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            playerScore.textContent = "User Score: " + userScore;
    } else if (computerChoice === "scissors") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            compScore.textContent = "Computer Score: " + computerScore;
        }
    if (computerScore === 5) {
        alert("Computer wins!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";
    }
    if (userScore === 5) {
        alert("Player wins!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";
    }
        }

function playScissors() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {computerChoice = "rock"
        } else if (computerChoice >= 0.34 && computerChoice <= 0.67 ) {computerChoice = "paper"
        } else {computerChoice = "scissors" }
    if (computerChoice === "scissors") {
            roundAnnounce.textContent = "TIE GAME!"
    } else if (computerChoice === "rock") {
            computerScore++
            roundAnnounce.textContent = "YOU LOSE!"
            compScore.textContent = "Computer Score: " + computerScore;
    } else if (computerChoice === "paper") {
            userScore++
            roundAnnounce.textContent = "YOU WIN!"
            playerScore.textContent = "User Score: " + userScore;
        }
    if (computerScore === 5) {
        alert("Computer wins!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";

    }
    if (userScore === 5) {
        alert("You win!");
        playerScore.textContent = "User Score: " + 0;
        compScore.textContent = "Computer Score: " + 0;
        roundAnnounce.textContent = "Rematch?";
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
playerScore.style.padding = "20px";
playerScore.textContent = "User Score: " + userScore;
container.appendChild(playerScore);

const compScore = document.createElement('div');
compScore.style.backgroundColor = "pink";
compScore.style.padding = "20px";
compScore.textContent = "Computer Score: " + computerScore;
container.appendChild(compScore);

const roundAnnounce = document.createElement('div');
roundAnnounce.style.backgroundColor = "lightgreen";
roundAnnounce.style.padding = "20px";
roundAnnounce.style.fontWeight = "bold";
roundAnnounce.style.fontSize = "50px";
roundAnnounce.textContent = "Who will win?!"
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
