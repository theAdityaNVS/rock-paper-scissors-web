// Variables
let userScore = 0;
let computerScore = 0;
let userScoreDisplay = document.getElementById("user-score");
let computerScoreDisplay = document.getElementById("computer-score");
let scoreBoard = document.getElementsByClassName("scoreDisplay");
let resultBoard = document.querySelector(".result > p");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let choices = ["rock", "paper", "scissors"];

// UI Variables
let userWord = "user".fontsize(3).sup();
let compWord = "comp".fontsize(3).sup();

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
        case "rockscissors": win(player, computer); break;
        case "scissorspaper": win(player, computer); break;
        case "paperrock": win(player, computer); break;
        case "scissorsrock": lose(player, computer); break;
        case "paperscissors": lose(player, computer); break;
        case "rockpaper": lose(player, computer); break;
        case "rockrock": draw(player, computer); break;
        case "scissorsscissors": draw(player, computer); break;
        case "paperpaper": draw(player, computer); break;
    }
}

// Score Keeper and Updater on Display Board
function win(userChoice, computerChoice){
    userScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultBoard.innerHTML = userChoice + userWord + " beats " + computerChoice + compWord + ". you WIN !";
    resultBoard.style.textTransform = "capitalize";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScoreDisplay.innerHTML = userScore;
    computerScoreDisplay.innerHTML = computerScore;
    resultBoard.innerHTML = computerChoice + compWord + " beats " + userChoice + userWord + ". you LOSE !";
    resultBoard.style.textTransform = "capitalize";
}


function draw(userChoice, computerChoice){
    resultBoard.innerHTML = userChoice + userWord + " equals " + computerChoice + compWord + "? its a DRAW !";
    resultBoard.style.textTransform = "capitalize";
}
