function computerPlay() {
  const random = Math.floor(Math.random() * 3);

  if (random == 0) {
    return 'rock';
  } else if (random == 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  // Equality
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return 'Equality!';
  }
  // Rock
  else if (playerSelection.toLowerCase() == 'rock') {
    // Win
    if (computerSelection.toLowerCase() == 'scissors') {
      return 'You Win! Rock beats Scissors';
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'paper') {
      return 'You Lose! Paper beats Rock';
    }
  }
  // Paper
  else if (playerSelection.toLowerCase() == 'paper') {
    // Win
    if (computerSelection.toLowerCase() == 'rock') {
      return 'You Win! Paper beats Rock';
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'scissors') {
      return 'You Lose! Scissors beats Paper';
    }
  }
  // Scissors
  else if (playerSelection.toLowerCase() == 'scissors') {
    // Win
    if (computerSelection.toLowerCase() == 'paper') {
      return 'You Win! Scissors beats Paper';
    }
    // Lose
    else if (computerSelection.toLowerCase() == 'rock') {
      return 'You Lose! Rock beats Scissors';
    }
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper, Scissors ?');
    const computerSelection = computerPlay();

    console.log(playRound(playerSelection, computerSelection));
  }
}

game();
