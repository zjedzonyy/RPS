const weapons = ["ROCK", "PAPER", "SCISSORS"]; // Lista broni dla komputera

// wylosuj broń dla komputera
function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

const weaponHhtml = document.getElementById("weapons");

function playerSelection(event) {
  const clickedElement = event.target; // Element, który został kliknięty
  

  // Sprawdzamy co zostało kliknięte i zwróć odpowiednią broń
  if (clickedElement.id === "rock") {
    return "ROCK";
  } else if (clickedElement.id === "paper") {
    return "PAPER";
  } else if (clickedElement.id === "scissors") {
    return "SCISSORS";
  } else {
    event.stopPropagation();
    return null;
  }
}

function playSingleRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Tie!";
  } else if (
    (computerChoice === "ROCK" && playerChoice === "SCISSORS") ||
    (computerChoice === "SCISSORS" && playerChoice === "PAPER") ||
    (computerChoice === "PAPER" && playerChoice === "ROCK")
  ) {
    return "You lost!";
  } else {
    return "You win!";
  }
}

let playerScore = 0,
  computerScore = 0;

function game() {
  playerScore = 0;
  computerScore = 0;
  
  weaponHhtml.addEventListener('click', function(event) {
    const playerChoice = playerSelection(event);
    const computerChoice = getComputerChoice();
    
    const result = playSingleRound(playerChoice, computerChoice);
    
    if (result === "You lost!") {
      computerScore++;
    } else if (result === "You win!") {
      playerScore++;
    }
    
    // Aktualizacja wyniku
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
    
    // Sprawdzenie, czy któryś z graczy zdobył 5 punktów
    if (playerScore === 5 || computerScore === 5) {
      gameActive = false;
      if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
      } else {
        console.log("You lost the game. Try again!");
      }
      
    }
  });
}

// na kliknięcie start uruchom grę 
const start = document.getElementById("start");
start.addEventListener('click', game);
