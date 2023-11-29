const weapons = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

function playSingleRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function game() {
  let playerScore = 0,
    computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose your weapon: ").toUpperCase();
    const computerSelection = getComputerChoice();
    const winner = playSingleRound(playerSelection, computerSelection);

    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    }
  }

  console.log(`Score: Player - ${playerScore}, Computer - ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie in the game!");
  }
}

game();
