const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase().trim();
  if(playerSelection == computerSelection) {
    console.log('Tie game!');
    return 0;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else {
    console.log(`You lose(: ${computerSelection} beats ${playerSelection}`);
    return -1;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper, or scissors?');
    const computerSelection = getComputerChoice();
    const res = playRound(playerSelection, computerSelection);

    if (res === 1) {
      playerScore += 1;
    } else if (res === -1) {
      computerScore += 1;
    } else {
      continue;
    }
  }
  
  if (playerScore > computerScore) {
    console.log(`You won! You: ${playerScore}, PC: ${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! You: ${playerScore}, PC: ${computerScore}`);
  } else {
    console.log(`Tie game! You: ${playerScore}, PC: ${computerScore}`);
  }
};

game();
