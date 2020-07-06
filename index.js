
//Step 1: Create Players
let player1 = {
  name: "a",
  shipCount: 0,
  gameBoard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};
let player2 = {
  name: "b",
  shipCount: 0,
  gameBoard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};

//player1.name = prompt("Type your name");
//player2.name = prompt("Type your name");


//Step 2: Randomly Add Ships to each Board
//alert("Your ships are being put on alert...");

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

//console.log(boardSetup(player1));
//console.log(boardSetup(player2));




/*
for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
  player2.shipCount++;
  player2.gameBoard[x][y] = 1;
  if (player2.gameBoard[x][y] === 1) {
    continue;
  }
  player2.shipCount++;
  player2.gameBoard[x][y] = 1;
}
*/
//console.log(player1["gameBoard"], player2["gameBoard"]);



//Step 3: Start the Game Play
//coin toss to pick up a beginner
let currentPlayer;
let opponent;
let currentPlayerX, currentPlayerY, opponentX, opponentY;

currentPlayer = player1;
opponent = player2;
let coin = Math.floor(Math.random() * 2 + 1);
if (coin !== 1) {
  currentPlayer = player2;
  opponent = player1;
  alert(`${currentPlayer.name}, you are starting the battle`);
  }



const battleship = () => {

for (let i = 1; opponent.shipCount !== 0; i++) {//i counts turnes
  currentPlayer = (i % 2 !== 0) ? currentPlayer : opponent;
  opponent = (i % 2 == 0) ? opponent : currentPlayer;  
  alert(`${currentPlayer.name} your turn`);
  let getOpponentX = prompt("Choose your `x` coordinate to strike.");
  let getOpponentY = prompt("Choose your `y` coordinate to strike.");

      if (opponent.gameBoard[getOpponentX][getOpponentY] == 1) {
        opponent.gameBoard[getOpponentX][getOpponentY] = 0;
        opponent.shipCount--;
        alert("Hit!");
      } else {
        alert("Miss!!");
      }
      
      if (opponent.shipCount === 0) {
        alert(`Congrats ${currentPlayer}! You are the winner!`)  
      }
    }      
  //Step 4: End the Game Play
  return 'The winner is ${currentPlayer}'
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
