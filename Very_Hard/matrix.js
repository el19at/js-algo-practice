/*
Write a function that accepts an integer N and returns an N * N spiral matrix.

Examples
matrix(2) ➞ [
  [1, 2],
  [4, 3]
]

matrix(3) ➞ [
  [1, 2, 3],
  [8  ,9, 4],
  [7, 6, 5]
]

matrix(4) ➞ [
  [1,   2,  3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]
]
*/






const DIRECTIONS = [[0, 1],[1, 0],[0, -1],[-1, 0]] // right -> down -> left -> up

function matrix(n) {
  let mat = Array(n).fill(null).map(() => Array(n).fill(0));
  return recSpiral(mat, 1, 0, 0, 0)
}

function recSpiral(mat, num, x, y, directionInd){
  if(!inRangeAndFree(mat, x, y))
    return mat;
  mat[x][y] = num;
  printMat(mat);
  num++;
  let nextX = x + DIRECTIONS[directionInd][0];
  let nextY = y + DIRECTIONS[directionInd][1];
  if(!inRangeAndFree(mat, nextX, nextY)){
    directionInd = (directionInd+1)%4;
    nextX = x + DIRECTIONS[directionInd][0];
    nextY = y + DIRECTIONS[directionInd][1];
  }
  return recSpiral(mat, num, nextX, nextY, directionInd);
}
function inRangeAndFree(mat, x, y){
  const n = mat.length;
  return 0 <= Math.min(x, y) && Math.max(x, y) < n && mat[x][y] === 0;
}
function printMat(mat){
  console.log('_________________________');
  for(const row of mat){
    let rowStr = '';
    for(const cell of row)
      rowStr += (cell + '\t');
    console.log(rowStr)
  }
  console.log('_________________________');
}
matrix(3)
exports.solution = matrix;