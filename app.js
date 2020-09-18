const startGameBtn = document.getElementById("start-game-btn");
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOISE = 'ROCK'
let gameIsRunning = false;
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WIN = 'PLAYER_WINS'
const RESULT_COMPUTER_WIN = 'COMPUTER_WINS'

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid Choice! We Chose ${DEFAULT_USER_CHOISE} for You!`)
    return ROCK
  }
  return selection
};

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  }
  else if (randomValue < 0.67) {
    return PAPER
  }
  else {
    return SCISSORS
  }
}

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WIN
      : RESULT_COMPUTER_WIN;




startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = ` You Picked ${playerChoice} Computer Picked ${computerChoice},therefore you `
  if (winner === RESULT_DRAW) {
    message = message + ` had a Draw!`
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + `Won!`
  } else {
    message = message + `Lost!`
  }
  alert(message)
  gameIsRunning = false
});
