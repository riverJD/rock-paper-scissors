// Computer Picks R/P/S


// Randomly generate a choice for the computer
function computerPlay(){
 
    
    return Math.floor(Math.random() * 3);

    }

// Get prompt from user, store their response as a whole number
function playerSelection()
{
    let selection;
    
    while (selection == null){
        selection = choiceToNumber(prompt("Please choose Rock, Paper, Scissors"));
    }
    return(selection);
}

// Play one round of RPS
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

function game(roundsToPlay)
{
    for (let i = 0; i < roundsToPlay; i++){
        console.log(playRound(getPlayerSelection(), computerPlay()));
    }
}

function playRound(playerSelection, computerSelection){
  
    if (playerSelection === computerSelection){
        setWinner(`Tie!  You both chose ${choiceToString(playerSelection)}`);
    }
    // Adding 1 to playerSelection and performing %(number of choice) will wrap the highest
    // number choice.  If this number is equal to computerSelection, player loses. 
    else if ((playerSelection + 1) % 3 === computerSelection){
        setWinner(`You lose! ${choiceToString(computerSelection)} beats ${choiceToString(playerSelection)}!`);
    }
    else {
        setWinner(`You won! ${choiceToString(playerSelection)} beats ${choiceToString(computerSelection)}`);
    }
}



let buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        
        playRound(playerSelection(button.firstElementChild.getAttribute('id')), computerPlay());
    
    });
});

function playerSelection(choice) { return choiceToNumber(choice) };


function setWinner(winner){
    const div = document.querySelector('.score');
    console.log(div);
    div.textContent = winner;

}



//game();

//console.log(playRound(getPlayerSelection(), computerPlay()));
