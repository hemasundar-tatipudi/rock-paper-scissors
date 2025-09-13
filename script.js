let humanScore = 0;
let computerScore = 0;

const div = document.querySelector("#body");

// Title

const round = document.createElement("div");
round.textContent = "Shoot your Choice! (race to 5)";
round.id = "round";
div.appendChild(round);

// Human and Computer Scores

const scores = document.createElement("div");
scores.id = "scores";

const human = document.createElement("div");
human.textContent = `PLAYER: ${humanScore}`;
human.id = "human";
scores.appendChild(human);

const computer = document.createElement("div");
computer.textContent = `COMPUTER: ${computerScore}`;
computer.id = "computer";
scores.appendChild(computer);

div.appendChild(scores);

// Choice of ROCK PAPER SCISSORS

const option = document.createElement("div");
option.id = "option";

const rock = document.createElement("button");
rock.textContent = "ROCK ✊";
rock.className = "choice";
option.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER ✋";
paper.className = "choice";
option.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "SCISSORS ✌️";
scissors.className = "choice";
option.appendChild(scissors);

div.appendChild(option);

// Clicking on ROCK, PAPER, SCISSORS buttons
rock.addEventListener('click',()=>{
    playBeep();
    playGame('rock');
});
paper.addEventListener('click',()=>{
    playBeep();
    playGame('paper');
});
scissors.addEventListener('click',()=>{
    playBeep();
    playGame('scissors');
});



// Each round of the game
function playGame(humanSelection) {
    let computerSelection = getComputerChoice();

    if (humanSelection===computerSelection) {
        round.textContent = `${humanSelection} ties with ${computerSelection}`;
    }
    else if (
        (humanSelection==="rock" && computerSelection==="scissors") ||
        (humanSelection==="paper" && computerSelection==="rock") ||
        (humanSelection==="scissors" && computerSelection==="paper")
    ) {
        humanScore++;
        round.textContent = `${humanSelection} beats ${computerSelection}`;
    }
    else {
        computerScore++;
        round.textContent = `${computerSelection} beats ${humanSelection}`;
    }

    human.textContent = `PLAYER: ${humanScore}`;
    computer.textContent = `COMPUTER: ${computerScore}`;

    if (isGameOver()) {
        showGameOver();
    }
}

// Computer's choice of ROCK, PAPER, SCISSORS
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

// If any player reach score of 5, end the game
function isGameOver() {
    if (humanScore===5 || computerScore===5) {
        return true;
    }
    return false;
}

// When the game is over
function showGameOver() {
    const popup = document.querySelector("#popup");
    popup.replaceChildren();
    popup.style.display = "flex";

    const box = document.createElement("div");
    box.className = "popup-box";

    const result = document.createElement("h2");
    const finalScore = document.createElement("p");
    const restart = document.createElement("button");

    if (humanScore==5) {
        result.textContent = "You Won!";
        document.body.classList.add("win");
    }
    else {
        result.textContent = "You Lost!";
        document.body.classList.add("loss");
    }

    finalScore.textContent = `Final Score — You: ${humanScore} | Computer: ${computerScore}`;

    restart.textContent = "Play Again!";

    box.appendChild(result);
    box.appendChild(finalScore);
    box.appendChild(restart);
    popup.appendChild(box);

    // disable gameplay while popup is shown
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;

    restart.addEventListener('click',()=>{
        humanScore = 0;
        computerScore = 0;
        human.textContent = `PLAYER: ${humanScore}`;
        computer.textContent = `COMPUTER: ${computerScore}`;
        round.textContent = "Shoot your Choice!";

        // re-enable gameplay
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;

        popup.replaceChildren();
        popup.style.display = "none";
        document.body.classList.remove("win", "loss");
    })

}

// Make sound when choosing rock, paper or scissors
function playBeep(frequency = 900, duration = 150) {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = frequency;

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

  oscillator.stop(ctx.currentTime + duration / 1000);
}
