/*
Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.

Examples
The input may look like this:

[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
The 0 represents an empty space. The 1 represents a mine.

You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
Notes
Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
A wikipedia page explaining how Minesweeper works is available in the Resources tab
*/

function minesweeperNumbers(board) {
  const res = board.map((e)=>[...e]);
  for(let i = 0;i<board.length;i++)
    for(let j = 0;j<board[0].length;j++)
      res[i][j] = board[i][j]? 9 : countCellNeib(board, i, j);
  return res;
}
function countCellNeib(arr, row, col){
  const n = arr.length;
  const m = arr[0].length;
  let counter = 0;
  for(let i=Math.max(row-1, 0);i<Math.min(row+2, n);i++)
    for(let j=Math.max(col-1, 0);j<Math.min(col+2, m);j++){
      if(i===row && j===col)
        continue
      counter += arr[i][j];
  }
  return counter;
}
exports.solution = minesweeperNumbers;
