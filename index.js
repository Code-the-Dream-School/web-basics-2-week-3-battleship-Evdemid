
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



alert("Your ships are putting on alert...");

for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
    if (player1.gameBoard[x][y] === 1) {
    continue;
  }
  player1.shipCount++;
  player1.gameBoard[x][y] = 1;
}




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
console.log(player1.gameBoard, player2.gameBoard);
/*
Step 3: Start the Game Play

You will need to loop through the following steps, switching between players 1 and 2, until one of the players wins.

### Step 3a: Ask the Player to Choose Strike Coordinates

Using the `prompt()` function, ask the current player to choose an `x` and `y` coordinate to strike. You will need to store the user's input in a variable(s) for the next step.

### Step 3b: Determine if the Player Sunk their Opponent's Ship

Using the `x` and `y` coordinates from the previous step, check the opponent's board to see if the space (array element) at those indices is a ship (is equal to `1`).

- If yes, "sink the ship" (change the value from `1` to `0`), decrement the opponent's ship count, and show an alert that says "Hit!"
- If not, show an alert that says "Miss!" and let the loop continue (do nothing)


### Step 3c: Check if the Opponent has Any Ships Left

Having decremented the opponent's ship count, check if the number is still greater than zero.

- If not, the game has ended and the current player won
- If yes, let the loop continue (do nothing) and switch to the other player
*/

//coin toss to pick up a beginner
let coin = Math.floor(Math.random() * 2 + 1);
if (coin === 1) {
  alert(`${player1.name}, you are starting the battle`);
} else {
  alert(`${player2.name}, you are starting the battle`);
}
/*
  let getPlayer2X, getPlayer2Y, getPlayer1X, getPlayer1Y;
  while (player1.shipCount !== 0 && player2.shipCount !== 0)
    do {
      let getPlayer2X = prompt("Choose your `x` coordinate to strike.");//#1 player's turn
      let getPlayer2Y = prompt("Choose your `y` coordinate to strike.");//#1 player's turn

      if (player2.gameBoard[getPlayer2X][getPlayer2Y] == 1) {
        player2.gameBoard[getPlayer2X][getPlayer2Y] = 0;
        player2.shipCount--;
        alert("Hit!");
      }
      else {
        alert("Miss!!");
      }
      let getPlayer1X = prompt("Choose your `x` coordinate to strike.");//#2 player's turn
      let getPlayer1Y = prompt("Choose your `y` coordinate to strike.");//#2 player's turn

      if (player1.gameBoard[getPlayer1X][getPlayer1Y] == 1) {
        player1.gameBoard[getPlayer1X][getPlayer1Y] = 0;
        player1.shipCount--;
        alert("Hit!");
      }
      else {
        alert("Miss!!");
    }
      
      /*  
      const battleship = () => {
  return 'The winner is...?'
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
*/