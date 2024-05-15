function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0){
    return "rock"
  } else if (computerChoice === 1){
    return "paper"
  } else if (computerChoice === 2){
    return "scissors"
  }
}

function getHumanChoice(){
  const humanChoice = prompt("Choose rock, paper, or scissors");
  return humanChoice.toLowerCase();
}

let humanScore = 0
let computerScore = 0

function playGame(){

  for (let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log (computerSelection)
    console.log (humanSelection)

    function playround(humanSelection, computerSelection){
      if (humanSelection === computerSelection){
        console.log("Draw, try again");}  
      else if (humanSelection === "paper" && computerSelection === "rock"){
        humanScore++;
        console.log("You Win!");}
      else if (humanSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        console.log("You lose");}
      else if (humanSelection === "scissors" && computerSelection === "paper"){
        humanScore++;
        console.log("You Win!");}
      else if (humanSelection === "rock" && computerSelection === "paper"){
        computerScore++;
        console.log("You lose");}
      else if (humanSelection === "rock" && computerSelection === "scissors"){
        humanScore++;
        console.log("You Win!");}
      else if (humanSelection === "paper" && computerSelection === "scissors"){
        computerScore++;
        console.log("You lose");}
      else {
        console.log("No Match")
      } 
    }
  }
}

playGame()

console.log(humanScore)

console.log(computerScore)
