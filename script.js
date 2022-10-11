console.log("starting RPS game");
const choiceButton = document.querySelectorAll(`.game-button`);
const battleLog = document.querySelector(`.battlelog`);
const scorediv = document.querySelector(`.score`);
const finaldiv = document.querySelector(`.finalresult`);
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
        if (+item.getAttribute(`data-value`) === 0) {
            console.log("You chose Rock");
        } else if (+item.getAttribute(`data-value`) === 1) {
            console.log("You chose Paper");
        } else if (+item.getAttribute(`data-value`) === 2) {
            console.log("You chose Scissors");
        } else { }
        item.style.color = "crimson";
        playerChoice = +item.getAttribute(`data-value`);
        game();
    }));

});
function playRound(computerChoice, playerChoice) {
    switch (true) {
        case (computerChoice === 0 && playerChoice === 0):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Draw, you both chose Rock &#9632;
<br>`;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 0 && playerChoice === 1):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Player wins, Paper beats Rock &#9650;
            <br>`;
            playerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 0 && playerChoice === 2):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Computer wins, Rock beats Scissors &#9660;
            <br>`;
            computerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 1 && playerChoice === 0):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Computer wins, Paper beats Rock &#9660;
            <br>`;
            computerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 1 && playerChoice === 1):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}:  Draw, you both chose Paper &#9632;
<br>`;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 1 && playerChoice === 2):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Player wins, Scissors beat Paper &#9650;
            <br>`;
            playerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 2 && playerChoice === 0):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Player wins, Rock beats Scissors &#9650;
            <br>`;
            playerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 2 && playerChoice === 1):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Computer wins, Scissors beat Paper &#9660;
            <br>`;
            computerScore++;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;
        case (computerChoice === 2 && playerChoice === 2):
            roundCounter++;
            battleLog.innerHTML += `Round ${roundCounter}: Draw, you both chose Scissors &#9632;
<br>`;
            scorediv.innerHTML = `Rounds played: ${roundCounter}, Player: ${playerScore}, Computer: ${computerScore}`;
            break;

        default:
            console.log("error");
            break;
    }
}

function game() {
    if (computerScore === 5) {
        finaldiv.innerText = `COMPUTER WINS`;
    } else if (playerScore === 5) {
        finaldiv.innerText = `PLAYER WINS`;
    } else {
        getComputerChoice();
        playRound(computerChoice, playerChoice);
    }
}