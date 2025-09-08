function getComputerChoice() {
    const randNum = Math.floor(Math.random()*3);
    if (randNum===0) {
        return "rock";
    }
    else if (randNum===1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("Enter your choice");
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        console.log(`This round is a tie`);
    }
    else if ((humanChoice=="rock" && computerChoice=="scissors") || 
    (humanChoice=="paper" && computerChoice=="rock") || (humanChoice=="scissors" && computerChoice=="paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
        humanScore += 1;
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore += 1;
    }
}

function playGame() {
    let humanSelection;
    let computerSelection;
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}, Human: ${humanSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}, Human: ${humanSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}, Human: ${humanSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}, Human: ${humanSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer: ${computerSelection}, Human: ${humanSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}`);
}

let humanScore = 0;
let computerScore = 0;

playGame();