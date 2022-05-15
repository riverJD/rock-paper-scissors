// Computer Picks R/P/S



function computerPlay(){
    // computer's choice.  random number between 0-2
    
    return Math.floor(Math.random() * 3);

    }

    // Play one round of RPS
function playRound(playerSelection, computerSelection){

    
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

function getPlayerSelection()
{
    const playerSelection = prompt("Please choose Rock, Paper, Scissors");

    if (choiceToNumber(playerSelection) == undefined)
    {
        getPlayerSelection();
    }
}

const computerSelection = computerPlay();

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
            console.log("You did not enter a valid choice!");  

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

console.log(playRound(choiceToNumber(getPlayerSelection()), computerSelection));

// Assign numberic value to response

// Ask for User to Choose R/P/S
    
//Assign numeric value to response


//Compare values


//Display winner of round


//Function to start x number of rounds
