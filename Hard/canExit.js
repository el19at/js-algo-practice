/*
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.

Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.

Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.
*/

function canExit( maze, i=0, j=0 ) {
  const m = maze.length;
  const n = maze[0].length;
  maze[i][j] = 1;
  if(i===m-1 & j==n-1)
    return true
  const adjCellsInds = getAdjCellsInd(i, j);
  const canMoveToArr = adjCellsInds.filter((ind)=> canMoveTo(maze, ind[0], ind[1]));
  for(const canMove of canMoveToArr){
    if(canExit(deepCopy(maze), canMove[0], canMove[1]))
      return true;
  }
  return false;
}
function deppCopy(arr){
  return [arr.map((inner)=>[...inner])]
}
function canMoveTo(maze, i, j){
  const m = maze.length;
  const n = maze[0].length;
  return  0<=i && i<m && 0<=j && i<n && maze[i][j] === 0;
}
function getAdjCellsInd(i, j){
  return [[i+1, j],[i-1, j],[i, j+1],[i, j-1]]
}
//const maze = [[0, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 0, 1, 1], [1, 0, 0, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 1], [1, 1, 1, 1, 1, 0, 0]];
exports.solution = canExit;