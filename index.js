
//Step 1: Create Players
let player1 = {
  name: "",
  shipCount: 0,
  gameBoard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};
let player2 = {
  name: "",
  shipCount: 0,
  gameBoard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};

player1.name = prompt("Type your name");
player2.name = prompt("Type your name");


//Step 2: Randomly Add Ships to each Board
alert("Your ships are being put on alert... Be ready for the battle");

const boardSetup = (player) => {

  for (let i = 0; player.shipCount < 4; i++) {
    let x = Math.floor(Math.random() * 4);
    let y = Math.floor(Math.random() * 4);
    if (player.gameBoard[x][y] === 1) {
      continue;
    }
    player.shipCount++;
    player.gameBoard[x][y] = 1;
    
  }
  return player.gameBoard;
};
boardSetup(player1);
boardSetup(player2);

//Step 3: Start the Game Play
//coin toss to pick up a beginner
let currentPlayer = player1;
let opponent = player2;

let coin = Math.floor(Math.random() * 2 + 1);
if (coin !== 1) {
  currentPlayer = player2;
  opponent = player1;
}

const battleship = () => {
  while (opponent.shipCount > 0) {
    alert(`${currentPlayer.name} your turn`);
    let getOpponentX = prompt("Choose your `x` coordinate to strike.");
    let getOpponentY = prompt("Choose your `y` coordinate to strike.");
    if (opponent.gameBoard[getOpponentX][getOpponentY] == 1) {
      opponent.gameBoard[getOpponentX][getOpponentY] = 0;
      opponent.shipCount--;
      alert("Hit!");
      if (opponent.shipCount === 0) {
        alert(`Congrats ${currentPlayer.name}! You are the winner!`);
        break;
      }
    } else {
      alert("Miss!!");
    }
    [currentPlayer, opponent] = [opponent, currentPlayer];
  }
  return `${currentPlayer.name} you are the winner and the great naval commander!`;
};

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
