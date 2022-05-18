// Computer Picks R/P/S

let cpuScore;
let playerScore;

resetScores();
// Randomly generate a choice for the computer
function computerSelection() { 
    return Math.floor(Math.random() * 3);
}

// Convert player choice (string) to number for comparison
function choiceToNumber(selection){
    switch (selection.toLowerCase()){
        case 'rock':
            return 0;

        case 'paper': 
            return 1;

        case 'scissors':
            return 2;

        default:
            return null;

    }
}
// Convert numerical choice to string for use in game
function choiceToString(selection){
    switch (selection){
        case 0:
            return 'Rock';

        case 1: 
            return 'Paper';

        case 2:
            return 'Scissors';

    }
}

function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
        setRoundWinnerText(`Tie!  You both chose ${choiceToString(playerSelection)}`);
    }
    // Adding 1 to playerSelection and performing %(number of choice) will wrap the highest
    // number choice.  If this number is equal to computerSelection, player loses. 
    else if ((playerSelection + 1) % 3 === computerSelection){
        updateCpuScore();
        setRoundWinnerText(`You lose! ${choiceToString(computerSelection)} beats ${choiceToString(playerSelection)}!`);
    }
    else {
        updatePlayerScore();
        setRoundWinnerText(`You won! ${choiceToString(playerSelection)} beats ${choiceToString(computerSelection)}`);
    }
}

let buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        
        playRound(playerSelection(button.firstElementChild.getAttribute('id')), computerSelection());
    
    });
});

function playerSelection(choice) { return choiceToNumber(choice) };


function setRoundWinnerText(winner){
    const div = document.querySelector('#score-text');   
    //console.log(div);
    div.textContent = winner;
    div.childElementCount

}

function updateCpuScore(){
    
    cpuScore += 1;
    updateScoreBoard()
    if (cpuScore === 5){
        setGameWinner('computer')
        return;
    }
 
    console.log('cpu' + cpuScore);

    //console.log(div);

}
function updatePlayerScore(){
    
    playerScore += 1;
    updateScoreBoard()
    if (playerScore === 5){
        setGameWinner('computer')
        return;
    }
    //console.log('player: ' + playerScore);

}

function updateScoreBoard(){
    const player = document.getElementById('player');
    const cpu = document.getElementById('computer');
    //console.log(div);
    player.textContent = playerScore;
    cpu.textContent = cpuScore;
}

function setGameWinner(winner){
    
    updateScoreBoard()
    const gameWinner = document.querySelector(`#win-text`);
    console.log('debug' + gameWinner);
    gameWinner.textContent = `${winner} won!  Score was: ${playerScore} to ${cpuScore}!`;
    resetScores();
}

function resetScores(){
    
    cpuScore = 0;
    playerScore = 0;
    
}

//game();

//console.log(playRound(getPlayerSelection(), computerPlay()));