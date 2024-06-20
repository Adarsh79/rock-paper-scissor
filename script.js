const choices = ["rock", "paper", "scissors"];
const humanDisplay = document.getElementById("humanDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const humanScoreDisplay = document.getElementById("humanScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (humanChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch(humanChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!": "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!": "YOU LOSE!";
                break;
        }
    }

    humanDisplay.textContent = `PLAYER: ${humanChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result) {
        case "YOU WIN!":
            humanScore++;
            humanScoreDisplay.textContent = humanScore;
            break;
        case "YOU LOSE!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}