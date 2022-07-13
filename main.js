
 const choices = ["rock", "paper", "scissors"];
 const winners = [];

 function game() {
   for(let i = 1; i <= 5; i++){
     playRound(i);
   };
   logWins();
}
 
function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection,computerSelection);
  winners.push(winner);
  logRound(playerSelection,computerSelection,winner,round);


}

function playerChoice() {
  let input = prompt("type rock, paper, or scissors");
  input = input.toLowerCase();
  return input;
}

 function computerChoice() {
    return choices [Math.floor(Math.random()*choices.length)];
 }
 
 function checkWinner(choicePerson, choiceComputer) {
   if(choicePerson === choiceComputer) {
      return "It is a tie.";
    }
      else if (
        (choicePerson === "rock" && choiceComputer === "scissors") ||
        (choicePerson === "scissors" && choiceComputer === "paper") ||
        (choicePerson === "paper" && choiceComputer === "rock"))
     {
    return "Player";
      } else {
     return "Computer";
      }
    }
    
function logWins(){
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "It is a tie.").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Ties:", ties);
}

function logRound (playerChoice, computerChoice, winner, round){
  console.log("Round:", round);
  console.log("Player Chose", playerChoice);
  console.log("Computer Chose", computerChoice);
  console.log(winner, "Won the round");
  console.log("---------------");
}

