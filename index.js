const weapons = ["ROCK", "PAPER", "SCISSORS"]; // Lista broni dla komputera

// wylosuj broń dla komputera
function getComputerChoice() {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

let gameActive = false;
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
  gameActive = true;

  // Usun poprzednia tablice wynikow jesli istnieje
  const existingBoard = document.getElementById('board');
  if (existingBoard) {
    existingBoard.parentNode.removeChild(existingBoard);
  }
  

  // Tworzę div i 2 elementy mu dodaje
  const board = document.createElement('ul');
  board.id = 'board';
  const boardComputer = board.appendChild(document.createElement('li'));
  const boardPlayer = board.appendChild(document.createElement('li'));

  boardComputer.innerText = computerScore;
  boardPlayer.innerText = playerScore;

  // Dodanie elementu board do struktury DOM
  const scoreboard = document.getElementById('scoreboard');
  scoreboard.innerText == "SCOREBOARD";
  scoreboard.appendChild(board);

  weaponHhtml.addEventListener('click', function(event) {
    if (!gameActive) return;
    const playerChoice = playerSelection(event);
    const computerChoice = getComputerChoice();

    // Usun jesli istnieje w HTML 'fight'
    const existingDuel = document.getElementById('duel');
    if (existingDuel) {
      existingDuel.parentNode.removeChild(existingDuel);
    }
    // Tworze list i dodaje do niej 2 elementy
    const duel = document.createElement('ul');
    duel.id = 'duel';
    const duelComputer = duel.appendChild(document.createElement('li'));
    const duelPlayer = duel.appendChild(document.createElement('li'));
    // Dodaje co maja dodane elementy wyswietlac
    duelComputer.innerText = computerChoice;
    duelPlayer.innerText = playerChoice;
    // Dodanie elementu duel do struktury DOM
    const fight = document.getElementById('fight');
    fight.innerText == "FIGHT!";
    fight.appendChild(duel);
    
    
    const result = playSingleRound(playerChoice, computerChoice);
    
    if (result === "You lost!") {
      computerScore++;
    } else if (result === "You win!") {
      playerScore++;
    }
    
    // Aktualizacja wyniku
    console.log(`Player Score: ${playerScore} - Computer Score: ${computerScore}`);
    boardComputer.innerText = computerScore;
    boardPlayer.innerText = playerScore;
    
    // Sprawdzenie, czy któryś z graczy zdobył 5 punktów
    if (playerScore === 5 || computerScore === 5) {
      gameActive = false;
      if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
      } else {
        console.log("You lost the game. Try again!");
      }

    if (!gameActive) {
      weaponHhtml.removeEventListener('click', this); // Usunięcie nasłuchiwacza po zakończeniu gry
      return;
    }
      
    }
  });
}

// na kliknięcie start uruchom grę 
const start = document.getElementById("start");
start.addEventListener('click', game);


// TODO:
// 1. Wylacz mozliwosc dalszej gry po skonczonej rozgrywce DONE
// 2. Dodac tablice wynikow DONE
// 3. Dodac kto jaka bron wybral DONE
// 4. Jak zrobie GUI to po rozegranej rundzie podswietlic wyskakujacego div w kolorze:
// zielony : win; czerwony : lose; pomaranczowy : remis;
// 5. FLEXBOX
// 6. Nwm cos upiekszyc?
