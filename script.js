function computerPlay () {
    play = Math.floor((Math.random() * 100) + 1);
    //console.log(play);
    if (play < 34){
        //console.log("rock");
        return "rock";

    }else if (play > 33 && play < 67){
        //console.log("paper");
        return "paper";
    }else {
        //console.log("scissors");
        return "scissors";
    }   
}
//console.log(computerPlay());


let computerSelection = computerPlay();
let playerSelection = prompt("Enter your guess... \n'rock', 'paper', or 'scissors'").toLowerCase();
//const playerSelection = "paper";

//console.log(computerSelection);
//console.log(playerSelection);


function playRound (computerSelection, playerSelection){
    //console.log(computerSelection);
    //console.log(playerSelection);
    if (playerSelection != null && playerSelection.length >1){
        if (computerSelection === playerSelection){
            //console.log("Tie Game, Start Over!")
            return "Tie Game, Start Over.";

        }else if (computerSelection === "rock"){
            if (playerSelection === "paper"){
                //console.log("You win! Paper beats Rock!")
                return "You win! Paper beats Rock!";
            }else{
                //console.log("You lose... Rock beats Scissors.")
                return "You lose... Rock beats Scissors.";
            }
        }else if (computerSelection === "paper"){
            if (playerSelection === "scissors"){
                //console.log("You win! Scissors beats Paper!")
                return "You win! Scissors beats Paper!";
            }else{
                //console.log("You lose... Paper beats rock.")
                return "You lose... Paper beats rock.";
            }
        }else{
            if(playerSelection === "rock"){
                //console.log("You win! Rock beats Scissors!")
                return "You win! Rock beats Scissors!";
            }else{
                //console.log("You lose... Scissors beats paper.")
                return "You lose... Scissors beats paper.";
            }
        }
    }else{
        //console.log("You didn't enter a valid answer... \nTry again!")
        return "You didn't enter a valid answer. \nTry again.";
    }
    }

//console.log(playRound(computerSelection, playerSelection));

let gameCount = 1;
let playerScore = 0;
let computerScore = 0;

function game(){
    while (gameCount<2){
        playRound(computerSelection,playerSelection);
        console.log("Round: "+gameCount+" - "+"Computer Choice: "+computerSelection+" --- "+"Player Choice: "+playerSelection);
        console.log(playRound(computerSelection,playerSelection));
        if (playRound(computerSelection,playerSelection).match(/[!]/)){
            playerScore++;

        }else if(playRound(computerSelection,playerSelection).match(/lose/g)){
            computerScore++;
        }
        console.log("Computer Score: "+computerScore+" --- "+"Player Score: "+playerScore);
        gameCount++;

    }
    
    while (gameCount<6){
        computerSelection = computerPlay();
        playerSelection = prompt("Enter your guess... \n'rock', 'paper', or 'scissors'").toLowerCase();
        playRound(computerSelection,playerSelection);
        console.log("Round: "+gameCount+" - "+"Computer Choice: "+computerSelection+" --- "+"Player Choice: "+playerSelection);
        console.log(playRound(computerSelection,playerSelection));
        if (playRound(computerSelection,playerSelection).match(/[!]/)){
            playerScore++;

        }else if(playRound(computerSelection,playerSelection).match(/lose/g)){
            computerScore++;
        }

        console.log("Computer Score: "+computerScore+" --- "+"Player Score: "+playerScore);
        gameCount++;
    }
}
game();