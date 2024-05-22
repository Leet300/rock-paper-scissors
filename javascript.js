let humanScore = 0
let computerScore = 0
let clickCount = 0

function playGame(){
  //Random computer choice for rock, paper, or scissors.

  clickCount++

  if(clickCount <= 5){
  playRound = function (choice){
    let computerSelection = getComputerChoice();
    let humanSelection = choice
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

      if (humanSelection === computerSelection){
        const humanDisp = document.createElement('p')
        humanDisp.textContent = humanSelection
        humanColumn.appendChild(humanDisp)
        const compDisp = document.createElement('p')
        compDisp.textContent = computerSelection
        computerColumn.appendChild(compDisp)
        hScoreColumn.textContent = humanScore
        cScoreColumn.textContent = computerScore
        }  
      else if (humanSelection === 'paper' && computerSelection === 'rock'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp);
        humanScore = humanScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else if (humanSelection === 'paper' && computerSelection === 'scissors'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp);
        computerScore = computerScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else if (humanSelection === 'scissors' && computerSelection === 'paper'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp);
        humanScore = humanScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else if (humanSelection === 'rock' && computerSelection === 'paper'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp);
        computerScore = computerScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else if (humanSelection === 'rock' && computerSelection === 'scissors'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp)
        humanScore = humanScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else if (humanSelection === 'paper' && computerSelection === 'scissors'){
        const humanDisp = document.createElement('p');
        humanDisp.textContent = humanSelection;
        humanColumn.appendChild(humanDisp);
        const compDisp = document.createElement('p');
        compDisp.textContent = computerSelection;
        computerColumn.appendChild(compDisp);
        computerScore = computerScore + 1;
        hScoreColumn.textContent = humanScore;
        cScoreColumn.textContent = computerScore;}
      else {
        const humanDisp = document.createElement('p')
        humanDisp.textContent = humanSelection
        humanColumn.appendChild(humanDisp)
        const compDisp = document.createElement('p')
        compDisp.textContent = computerSelection
        computerColumn.appendChild(compDisp)
        console.log('No Match')} 
    }
  }
  else if(clickCount > 4){
    clickCount = 1
    if(humanScore > computerScore){
      let finishedGame = 'You Won';
      alert (finishedGame); }
    else if (humanScore < computerScore){
      let finishedGame = 'You Lost';
      alert (finishedGame); }
    else if (humanScore = computerScore){
      let finishedGame = 'Draw';
      alert (finishedGame);
    }
    humanColumn.replaceChildren(humanDisp)
    computerColumn.replaceChildren(compDisp)
    console.log ('Game Over')
    humanScore = 0
    computerScore = 0
  }

}



const container = document.querySelector('#container')
container.style.textAlign = 'center'

const title = document.createElement('h1')
title.textContent = 'Lets play Rock, Paper, Scissors'
container.appendChild(title)

const humanInput = document.createElement('div')

const desriptionText = document.createElement('p')
desriptionText.textContent = 'Pick one:'
humanInput.appendChild(desriptionText)

const rock = document.createElement('button')
rock.classList.add('rock')
rock.value = 'rock'
rock.da = 'button'
rock.textContent = 'Rock'
humanInput.appendChild(rock)

const paper = document.createElement('button')
paper.classList.add('paper')
paper.type = 'button'
paper.value = 'paper'
paper.textContent = 'Paper'
humanInput.appendChild(paper)

const scissors = document.createElement('button')
scissors.classList.add('scissors')
scissors.type = 'button'
scissors.value = 'scissors'
scissors.textContent = 'Scissors'
humanInput.appendChild(scissors)

container.appendChild(humanInput)

const titles = document.createElement('div')
titles.style.display = 'flex'
title.style.display.textAlign = 'center'

const humanTitle = document.createElement('h3')
humanTitle.textContent = 'Human Selection'
humanTitle.style.flex = '1'
titles.appendChild(humanTitle)

const compTitle = document.createElement('h3')
compTitle.textContent = 'Computer Selection'
compTitle.style.flex = '1'
titles.appendChild(compTitle)

container.appendChild(titles)

const dispSelects = document.createElement('div')
dispSelects.style.display = 'flex'

const humanColumn = document.createElement('div')
humanColumn.classList.add('humanColumn')
humanColumn.style.flex = '1'

const humanDisp = document.createElement('p')
humanColumn.appendChild(humanDisp)

dispSelects.appendChild(humanColumn)

const computerColumn = document.createElement('div')
computerColumn.classList.add('computerColumn')
computerColumn.style.flex = '1'

const compDisp = document.createElement('p')
computerColumn.appendChild(compDisp)

dispSelects.appendChild(computerColumn)

container.appendChild(dispSelects)

const scoreTitles = document.createElement('div')
scoreTitles.style.display = 'flex'
scoreTitles.style.display.textAlign = 'center'

const hScoreTitle = document.createElement('h3')
hScoreTitle.textContent = 'Human Score'
hScoreTitle.style.flex = '1'
scoreTitles.appendChild(hScoreTitle)

const cScoreTitle = document.createElement('h3')
cScoreTitle.textContent = 'Computer Score'
cScoreTitle.style.flex = '1'
scoreTitles.appendChild(cScoreTitle)

container.appendChild(scoreTitles)

const totalScores = document.createElement('div')
totalScores.style.display = 'flex'

const hScoreColumn = document.createElement('div')
hScoreColumn.style.flex = '1'
hScoreColumn.style.textAlign = 'center'
totalScores.appendChild(hScoreColumn)

const cScoreColumn = document.createElement('div')
cScoreColumn.style.flex = '1'
cScoreColumn.style.textAlign = 'center'
totalScores.appendChild(cScoreColumn)
container.appendChild(totalScores)


document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    let clickCount = 0
    play = playGame()
    playR = playRound(this.value)
  });
});