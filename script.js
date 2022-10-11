console.log("starting RPS game");
const choiceButton = document.querySelectorAll(`.gamechoice`);
let randomNumber;
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;



function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        console.log("Computer chose Rock");
    } else if (computerChoice === 1) {
        console.log("Computer chose Paper");
    } else {
        console.log("Computer chose Scissors");
    }

    return computerChoice;

}

choiceButton.forEach((item) => {
    (item.addEventListener(`click`, function () {
        if (+item.value === 0) {
            console.log("You chose Rock");
        } else if (+item.value === 1) {
            console.log("You chose Paper");
        } else if (+item.value === 2) {
            console.log("You chose Scissors");
        } else { }
        item.style.backgroundColor = "red";
        playerChoice = +item.value;
        game();
    }));

});
function playRound(computerChoice, playerChoice) {
    switch (true) {
        case (computerChoice === 0 && playerChoice === 0):
            console.log("DRAW, you both chose Rock");
            roundCounter++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 0 && playerChoice === 1):
            console.log("Player wins, Paper beats Rock");
            roundCounter++;
            playerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 0 && playerChoice === 2):
            console.log("Computer wins, Rock beats Scissors");
            roundCounter++;
            computerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 1 && playerChoice === 0):
            console.log("Computer wins, Paper beats Rock");
            roundCounter++;
            computerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 1 && playerChoice === 1):
            console.log("%c DRAW, you both chose Paper", "color: skyblue");
            roundCounter++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 1 && playerChoice === 2):
            console.log("Player wins, Scissors beat Paper");
            roundCounter++;
            playerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 2 && playerChoice === 0):
            console.log("Player wins, Rock beats Scissors");
            roundCounter++;
            playerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 2 && playerChoice === 1):
            console.log("Computer wins, Scissors beat Paper");
            roundCounter++;
            computerScore++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;
        case (computerChoice === 2 && playerChoice === 2):
            console.log("DRAW, you both chose Scissors");
            roundCounter++;
            console.log(`Round: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`);
            break;

        default:
            console.log("error");
            break;
    }
}

function game() {
    while ((computerScore < 5) && (playerScore < 5)) {
        getComputerChoice();
        playRound(computerChoice, playerChoice);
    }
}