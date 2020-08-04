// Variables
let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.getElementById("user-score");
let computerScoreDisplay = document.getElementById("computer-score");
let scoreBoard = document.getElementsByClassName("scoreDisplay");
let resultBoard = document.getElementsByClassName("result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let choices = ["rock", "paper", "scissors"];


// Make Computer's Choice
function computerChoice(){
    let choiceMaker = Math.floor(Math.random() * 3);
    return choices[choiceMaker];
}

// Gives Final Result
function gameMaster(userChoice) {
    let player = userChoice;
    let computer = computerChoice();
    compareChoices(player, computer);
}

// Compare the Choices Made
function compareChoices(player, computer){
    switch(player + computer){
        case "rockscissors": win(); break;
        case "scissorspaper": win(); break;
        case "paperrock": win(); break;
        case "scissorsrock": lose(); break;
        case "paperscissors": lose(); break;
        case "rockpaper": lose(); break;
        case "rockrock": draw(); break;
        case "scissorsscissors": draw(); break;
        case "paperpaper": draw(); break;
    }
}

// Score Keeper and Updater on Display Board

function win(){
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function lose(){
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}


function draw(){
    userScore++;
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
}



function main(){
    // Player Choice Functions 
    rock.onclick = function(){
        gameMaster(choices[0]);
    };
    paper.onclick = function(){
        gameMaster(choices[1]);
    };
    scissors.onclick = function(){
        gameMaster(choices[2]);
    };
}

main();