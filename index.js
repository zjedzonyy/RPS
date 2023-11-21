var weapon = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice(){
    return weapon[Math.floor(Math.random() * weapon.length)];
}


function playSingleRound(){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Dobierz broń: ").toUpperCase();

    console.log(playerSelection);
}