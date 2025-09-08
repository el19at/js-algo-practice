/*
Write a sudoku validator. This function should return true if the 2-D array represents a valid sudoku and false otherwise. To be a valid sudoku:

Each row must have the digits from 1 to 9 exactly once.
Each column must have the digits from 1 to 9 exactly once.
Each 3x3 box must have the digits from 1 to 9 exactly once.
Examples
sudokuValidator([
 [1, 5, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ true

sudokuValidator([
 [1, 1, 2, 4, 8, 9, 3, 7, 6],
 [7, 3, 9, 2, 5, 6, 8, 4, 1],
 [4, 6, 8, 3, 7, 1, 2, 9, 5],
 [3, 8, 7, 1, 2, 4, 6, 5, 9],
 [5, 9, 1, 7, 6, 3, 4, 2, 8],
 [2, 4, 6, 8, 9, 5, 7, 1, 3],
 [9, 1, 4, 6, 3, 7, 5, 8, 2],
 [6, 2, 5, 9, 4, 8, 1, 3, 7],
 [8, 7, 3, 5, 1, 2, 9, 6, 4]
]) ➞ false
*/

function sudokuValidator(mat) {
  if(!checkRows(mat) || !checkRows(transpose(mat)))
      return false;
  for(let i = 0; i < 9 ; i += 3)
    for(let j = 0; j < 9 ; j += 3)
      if(!haveOneToNine(getArrayFromBox(mat, i, j, 3)))
        return false;
  return true;
  
}

function checkRows(mat){
  for(const row of mat)
    if(!haveOneToNine(row))
      return false;
  return true;
}
function haveOneToNine(arr){
  const oneToNine = new Set([1,2,3,4,5,6,7,8,9]);
  const res = oneToNine.intersection(new Set(arr));
  return res.size === 9;
}
function transpose(mat){
  return mat[0].map((_, colIndex) => mat.map(row => row[colIndex]));
}
function getArrayFromBox(mat, row, col, size){
  const res = [];
  for(let i = row;i<Math.min(row+size, mat.length);i++)
    for(let j = col;j<Math.min(col+size, mat[0].length);j++)
      res.push(mat[i][j]);
  return res;
}
exports.solution = sudokuValidator;
