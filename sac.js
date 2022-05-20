// Play a game of Rock Paper Scissors with a different flavor
// I would refactor this (and may someday) to be more object-oriented
// but for now it's a quick and dirty demonstration of css/javascript that I
// learned over the weekend.

let cpuScore;
let playerScore;
let cpuBattlesWon = 0;
let playerBattlesWon = 0;
let battlecount;

// Victory Conditions / Not flexible
const SKIRMISH_WINS_NEEDED = 5;
const BATTLE_WINS_NEEDED = 3;
const UNIT_TYPE_CHOICES = 3;

// Randomly generate a choice for the computer
function computerSelection() { 
    return Math.floor(Math.random() * 3);
}

// Convert player choice (string) to number for numerical comparison
function choiceToNumber(selection){
    switch (selection.toLowerCase()){
        case 'spears':
            return 0;

        case 'archers': 
            return 1;

        case 'cavalry':
            return 2;

        default:
            return null;

    }
}
// Convert numerical choice to string for use in flavor text/game
function choiceToString(selection){
    switch (selection){
        case 0:
            return 'Spears';

        case 1: 
            return 'Archers';

        case 2:
            return 'Cavalry';

    }
}

// Play one round/skirmish 
function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
        updateScoreBoard();
        setRoundWinnerText(`Tie!  You both chose ${choiceToString(playerSelection)}`);
    }
    // Adding 1 to playerSelection and performing %(number of choice) will wrap the highest
    // number choice.  If this number is equal to computerSelection, player loses. 
    else if ((playerSelection + 1) % UNIT_TYPE_CHOICES === computerSelection){
        updateCpuScore();
        setRoundWinnerText(`You lose! ${choiceToString(computerSelection)} beats ${choiceToString(playerSelection)}!`);
    }
    else {
        updatePlayerScore();
        setRoundWinnerText(`You won! ${choiceToString(playerSelection)} beats ${choiceToString(computerSelection)}`);
    }
}

function playerSelection(choice) { 
    return choiceToNumber(choice) 
};

function setRoundWinnerText(winner){
    const div = document.querySelector('#score-text');   
    div.textContent = winner;
    div.childElementCount

}

// Check win conditions for player and cpu
function updateCpuScore(){
    cpuScore += 1;
    updateScoreBoard()
    
    if (cpuScore === SKIRMISH_WINS_NEEDED){
        setBattleWinner('computer');
        return;
    }
}
function updatePlayerScore(){
    playerScore += 1;
    updateScoreBoard()
    
    if (playerScore === SKIRMISH_WINS_NEEDED){
        setBattleWinner('player');
        return;
    }

}
// Update skirmish scoreboard
function updateScoreBoard(){
    const player = document.getElementById('playerscore');
    const cpu = document.getElementById('cpuscore');
    player.textContent = playerScore;
    cpu.textContent = cpuScore;
}

// Will communicate battle winner, and track how many battles
// have been played. End game after three battles.
function setBattleWinner(winner){
    
    updateScoreBoard()
    let wintext;
    
    if (winner === 'player'){
        playerBattlesWon += 1;
        wintext = `You`;
    }
    else{
        cpuBattlesWon += 1;
        wintext = 'Opponent';
    }
    battlecount = playerBattlesWon + cpuBattlesWon;
    console.log(battlecount);

    // Activate text to display winner of battle
    const battleWinner = document.querySelector(`.win-text#battle${battlecount}`);
    battleWinner.classList.remove('inactive');
    console.log('debug' + battleWinner);
    battleWinner.innerHTML = `${wintext} won the battle ${playerScore} to ${cpuScore}!`;
    
    if (battlecount === BATTLE_WINS_NEEDED){
        console.log("ending game..");
        endGame();
    }
    else {resetScores()}

}


function resetScores(){
    cpuScore = 0;
    playerScore = 0;
    
}
// Initialize Game Content
function startGame(){
    resetScores();
    
    // UI for player selecting their unit type
    let buttons = document.querySelectorAll('.button');  
    buttons.forEach(button => {
        button.addEventListener('click', () => {    
            playRound(playerSelection(button.firstElementChild.getAttribute('id')), computerSelection());
        });
    });
    }

 // Creates a popup window declaring victory or loss and allows player to
// reset the game
function endGame(){

    let winFlag;

    if (playerBattlesWon > cpuBattlesWon){
        winFlag ='victory';
    }
    else {
        winFlag = 'loss'
    }

    const modal = document.querySelector(`#${winFlag}Screen`);
    const restart = document.querySelector(`.${winFlag}-content`);
    modal.style.display = "block";

    restart.onclick = () => {
        resetScores(); 
        modal.style.display = "none"; 
        // this is a lazy way to reset game, will improve later
        location.reload();
    };
}

startGame();
