// Computer Picks R/P/S



function computerPlay(){
    // computer's choice.  random number between 0-2
    
    return Math.floor(Math.random() * 3);

    }

// Get prompt from user, store their response as a whole number
function getPlayerSelection()
{
    let selection;
    
    while (selection == null){
        selection = choiceToNumber(prompt("Please choose Rock, Paper, Scissors"));
    }
    return(selection);
}

    // Play one round of RPS
function playRound(playerSelection, computerSelection){
    // Debug
    //console.log(playerSelection);
    //console.log(computerSelection);
    
    if (playerSelection === computerSelection){
        return(`Tie!  You both chose ${choiceToString(playerSelection)}`);
    }
    // Adding 1 to playerSelection and performing %(number of choice) will wrap the highest
    // number choice.  If this number is equal to computerSelection, player loses. 
    else if ((playerSelection + 1) % 3 === computerSelection){
        return(`You lose! ${choiceToString(computerSelection)} beats ${choiceToString(playerSelection)}!`);
    }
    else {
        return (`You won! ${choiceToString(playerSelection)} beats ${choiceToString(computerSelection)}`);
    }

    
}


//const playerSelection = getPlayerSelection();
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
// Convert numerical choice to string
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

game(5);

//console.log(playRound(getPlayerSelection(), computerPlay()));
