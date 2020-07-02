
let player1 = {
  name: "",
  shipCount: 4,
  gameBoard: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};
let player2 = {
  name: "",
  shipCount: 4,
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







const battleship = () => {
  return 'The winner is...?'
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
