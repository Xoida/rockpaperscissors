//let prompt = window.prompt("Player, what do you choose?");

const computerChoiceDisplay = document.getElementById('cc');
const playerChoiceDisplay = document.getElementById('pc');
const resultDisplay = document.getElementById('r');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    playerChoiceDisplay.textContent = userChoice;
    computerPlay();
    playRound();
}));

function computerPlay() {
    const randomNumber = (Math.floor(Math.random()*3))

    if ((randomNumber) === 0 ) {
        computerChoice = "rock";
    }
    else if ((randomNumber) === 1 ) {
        computerChoice = "paper";
    }
    else if ((randomNumber) === 2 ) {
        computerChoice = "scissors";
    }
    computerChoiceDisplay.textContent = computerChoice;
};

function playRound() {
    if ( userChoice === computerChoice) {
        result = "It's a draw!";
    } 
    else if ((userChoice === "rock" && computerChoice === "paper")) {
        result = "You Lose! Paper beats Rock";
    }
    else if ((userChoice === "rock" && computerChoice === "scissors")) {
        result = "You Win! Rock beats scissors";
    }
    else if ((userChoice === "paper" && computerChoice === "rock")) {
        result = "You Win! Paper beats Rock";
    }
    else if ((userChoice === "paper" && computerChoice === "scissors")) {
        result = "You Lose! Scissors beats Paper";
    }
    else if ((userChoice === "scissors" && computerChoice === "rock")) {
        result = "You Lose! Rock beats Scissors";
    }
    else if ((userChoice === "scissors" && computerChoice === "paper")) {
        result = "You Win! Scissors beats Paper";
    }
    resultDisplay.textContent = result;     
};




