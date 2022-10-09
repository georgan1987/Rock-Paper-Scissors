let choice = document.getElementById('choice');

//Determines Computer's choice and randomizes the selection
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

//Runs the game
function game() {
  let roundsPlayed = 0;
  let playerScore = 0;
  let computerScore = 0;

//Loops the game for 5 rounds. Tracks score
for (i=0; i < 5; i++){
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Choose between Rock, Paper or Scissors").toLowerCase();

console.log("Player chose", playerSelection);
console.log("Computer chose", computerSelection);

//Plays the Round to determine the winner
function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
        choice.innerText += "Its a tie this round! \r\n"
        return "Its a tie this round!"
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            choice.innerText += "Unfortunately you lost this round!! \r\n"
            computerScore++
            return "You lost this round!"
        }
        else {
            choice.innerText += "You won this round!!! \r\n"
            playerScore++
            return "You won this round!"
        }
    }
    else if (playerSelection == "scissors"){
        if (computerSelection == "rock") {
            choice.innerText += "Unfortunately you lost this round!! \r\n"
            computerScore++
            return "You lost this round!"
        }
        else {
            choice.innerText += "You won this round!! \r\n"
            playerScore++
            return "You won this round!"
        }
    }
    else if (playerSelection == "paper"){
        if (computerSelection == "scissors") {
            choice.innerText += "Unfortunately you lost this round!! \r\n"
            computerScore++
            return "You lost this round!"
        }
        else if (computerSelection == "paper"){
          choice.innerText += "It's a tie this round! \r\n"
          return "It's a tie this round!"
        }
        else {
            choice.innerText += "You won this round!! \r\n"
            playerScore++
            return "You won this round!"
        }
    }
  }

  console.log(playRound(playerSelection, computerSelection));
  console.log("Player's score " + playerScore + " and computer's score " + computerScore);

//Shows each's round result
  choice.innerText += "\r\n Score so far is, player's score " + playerScore + " and computer's score is " + computerScore + "\r\n \n \n"
}
//Determines the winner of the 5-rounds game
if (playerScore > computerScore){
      choice.innerText += "Winner! After a 5-rounds game, you beat the Computer"
}
else if (playerScore == computerScore){
      choice.innerText += "Final result after a 5-rounds games: It's a tie!"
}
else {
      choice.innerText += "Loser! After a 5-rounds game, you lost to the Computer"
 }
}

//Starts the game
game();