
/*
Step 1: Create Players

For this game, you will need **two players**.

Each player should have a "name", "ship count", and "game board" which means you will need to use an object. Below are the default values for each object property:

| Property  | Type   | Default Value                                                    |
| --------- | ------ | ---------------------------------------------------------------- |
| name      | String | User-provided via the `prompt()` function                        |
| shipCount | Number | `4` (the number of ships each player starts with)                |
| gameBoard | Array  | 2-dimensional array with 4 rows and 4 columns, filled with zeros |
*/


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

/*
## Step 2: Randomly Add Ships to each Board

Each player's board will start with **four ships**.

The ships should be placed randomly, which means you will need to do the following steps for each player's board:

1. Create a loop that runs until 4 ships have been added to the board
2. Inside the loop, generate a random `x` and a random `y` coordinate (must be between 0 and 3)
3. Check if the board space (array element) at those coordinates has a ship or not:
   - If not, "add a ship" (change the value from `0` to `1`) and increment the total added ships counter
   - If yes, let the loop continue (do nothing)

Here's an example of how a player's board would look in visual form:
*/

for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
  player1.shipCount++;
  if (player1.gameBoard[x][y] === 1) {
    continue;
  }
}

for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * 4);
  let y = Math.floor(Math.random() * 4);
  player2.shipCount++;
  if (player2.gameBoard[x][y] === 1) {
    continue;
  }
}







const battleship = () => {
  return 'The winner is...?'
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
