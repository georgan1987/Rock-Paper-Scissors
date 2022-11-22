let reset = document.querySelector('#play-again-btn');
let playerPoints = document.querySelector('#player-score');
let computerPoints = document.querySelector('#computer-score');
let optionBtn = document.querySelectorAll('div.options input');
let roundResults = document.querySelector('.result-text')


//Refresh the game in order to play a new game
reset.addEventListener('click',() => location.reload());

//Determines Computer's choice and randomizes the selection
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Disables buttons after 5 wins
function disableButtons(){
    optionBtn.forEach(elem => {
        elem.disabled = true;   
    })
}

//Runs the game
function game() {

//Gets Player Selection
optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice)});

  let playerScore = 0;
  let computerScore = 0;

//Plays the Round to determine the winner
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if ( (playerSelection == 'rock' && computerSelection == 'scissors') ||
         (playerSelection == 'scissors' && computerSelection == 'paper') ||
         (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore += 1;
            playerPoints.textContent = +playerScore
            roundResults.textContent = 'You won this round';
        
            if(playerScore == 5){
                roundResults.textContent = "\r\n  You won the game! \r\n Click the button below to play again!"
            disableButtons();
            }
         }
    
    else if (playerSelection == computerSelection){
            roundResults.textContent = 'It\'s a tie!';
    }

    else {
        computerScore += 1;
        computerPoints.textContent = +computerScore
        roundResults.textContent = 'You lost this round';
            if(computerScore == 5){
                roundResults.textContent = "\r\n \r\n You lost the game! Click the button below to play again!"
        disableButtons();
        }
    }
}

function getPlayerChoice(e){
    let playerSelection = (e.target.id);
    playerChoice = e.target.textContent;
    playRound(playerSelection, getComputerChoice() );
 }
}

//Starts the game
game();