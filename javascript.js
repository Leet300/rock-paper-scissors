function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0){
    let computerChoice = 'rock';
    return 'rock';
  } else if (computerChoice === 1){
    let computerChoice = 'paper';
    return 'paper'
  } else if (computerChoice === 2){
    let computerChoice = 'scissors';
    return 'scissors'
  }
}

function getHumanChoice(){
  const humanChoice = prompt('Choose rock, paper, or scissors');
  return humanChoice.toLowerCase();
}

function playGame(){

  let humanScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(humanSelection)
    console.log(computerSelection)


    function playround(humanSelection, computerSelection){
      if (humanSelection == computerSelection){
        console.log('Draw, try again');}  
      else if (humanSelection == 'paper' && computerSelection == 'rock'){
        humanScore++;
        console.log('You Win!');}
      else if (humanSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        console.log('You lose');}
      else if (humanSelection == 'scissors' && computerSelection == 'paper'){
        humanScore++;
        console.log('You Win!');}
      else if (humanSelection == 'rock' && computerSelection == 'paper'){
        computerScore++;
        console.log('You lose');}
      else if (humanSelection == 'rock' && computerSelection == 'scissors'){
        humanScore++;
        console.log('You Win!');}
      else if (humanSelection == 'paper' && computerSelection == 'scissors'){
        computerScore++;
        console.log('You lose');}
      else {
        console.log('No Match')
      } 
    }
  }
  console.log(humanScore)
  console.log(computerScore)
}

playGame()