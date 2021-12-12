let gameCount = 1;

let playerScore = 0;
let player = document.getElementById('player');
player.textContent = ' '+playerScore;

let computerScore = 0;
let computer = document.getElementById('computer');
computer.textContent = ' '+computerScore;

let scoreboard = document.getElementById('scoreboard');
scoreboard.style.display = "none";

let gameboard = document.getElementById('gameboard');

let upper = document.getElementById('upper');
let vs = document.getElementById('vs');
vs.textContent ='vs.';
vs.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
vs.style.fontSize = '23px';
let lower = document.getElementById('lower');

let roundInfo = document.getElementById('roundInfo');
roundInfo.style.display = "none";
let message = document.getElementById('message');
message.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
message.style.fontSize = '23px';


const rock = document.getElementById('rock');
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    game();
 })

const paper = document.getElementById('paper');
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    game();
 })

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    game();
 })

let results = document.getElementById('results');
results.style.display = "none";

let finalScore = document.getElementById('finalScore');
let winner = document.getElementById('winner');
winner.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
winner.style.fontSize = '23px';
let tryAgain = document.getElementById('tryAgain');
tryAgain.textContent = 'Play Another Game?'

tryAgain.addEventListener('mouseover',() => {
    tryAgain.style.color = 'rgb(37, 66, 194)';
    tryAgain.style.backgroundColor = 'rgb(249, 250, 248)';
    tryAgain.style.transform = 'scale(1.1)';
})

tryAgain.addEventListener('mouseout',() => {
    tryAgain.style.color = '#F9FAF8';
    tryAgain.style.background = 'none';
    tryAgain.style.transform = 'scale(1)';
})


tryAgain.addEventListener('click',() => {
    gameCount = 1;
    playerScore = 0;
    player.textContent = playerScore;
    computerScore = 0;
    computer.textContent =computerScore;
    message.style.display = "none";
    roundInfo.style.display = "none";
    results.style.display = "none";
    scoreboard.style.display = "none";
    gameboard.style.display = '';
})



function computerPlay () {
    play = Math.floor((Math.random() * 100) + 1);
    if (play < 34){
        return "Rock";
    }else if (play > 33 && play < 67){
        return "Paper";
    }else {
        return "Scissors";
    }   
}

function game(){
    if(playerScore < 5 && computerScore < 5){
        playRound(computerSelection,playerSelection);
        roundInfo.style.display = '';
        upper.textContent = ("Your Choice:  "+playerSelection);
        lower.textContent = ("Computer Choice:  "+computerSelection);
        gameCount++;
        if(playerScore === 5){
            gameboard.style.display = 'none';
            results.style.display = '';
            finalScore.textContent = 'Your Score: '+playerScore+' ---  Computer Score: '+computerScore;
            winner.textContent = 'You are the Champion!!!';
        }else if(computerScore === 5){
            gameboard.style.display = 'none';
            results.style.display = '';
            finalScore.textContent = 'Your Score: '+playerScore+' ---  Computer Score: '+computerScore;
            winner.textContent = 'You are a Loser!!!';
        }
    }  
}

function playRound (computerSelection, playerSelection){
    if (playerSelection != null && playerSelection.length >1){
        scoreboard.style.display = '';
        message.style.display = '';
        if (computerSelection === playerSelection){
            message.textContent =  "Tie Game, Choose Again...";
        }else if (computerSelection === "Rock"){
            if (playerSelection === "Paper"){
                message.textContent =  "You win! Paper beats Rock!";
                playerScore++;
                player.textContent = playerScore;
            }else{
                message.textContent =  "You lose... Rock beats Scissors.";
                computerScore++;
                computer.textContent = computerScore;
            }
        }else if (computerSelection === "Paper"){
            if (playerSelection === "Scissors"){
                message.textContent =  "You win! Scissors beats Paper!";
                playerScore++;
                player.textContent = playerScore;
            }else{
                message.textContent =  "You lose... Paper beats rock.";
                computerScore++;
                computer.textContent = computerScore;
            }
        }else{
            if(playerSelection === "Rock"){
                message.textContent =  "You win! Rock beats Scissors!";
                playerScore++;
                player.textContent = playerScore;
            }else{
                message.textContent =  "You lose... Scissors beats paper.";
                computerScore++;
                computer.textContent = computerScore;
            }
        }
    }
}


