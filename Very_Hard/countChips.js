/*
Write a chip counter for a battleship board. This function should return
the number of chips (ships) present on the 2-D array.

A chip is a segment of contiguous 1s, placed either horizontally or vertically.
Chips cannot touch each other, not even diagonally. Chips can be 1x1 in size.

Examples

countChips([
  [1,1,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0],
  [0,0,0,0,1,0,1,1],
  [0,1,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0],
  [0,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,1],
  [0,0,0,0,0,0,0,1]
]) ➞ 6

countChips([
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1]
]) ➞ 8
*/

function countChips(mat) {
  let count = 0;
  mat.forEach((_, i) => count += countSegmentsInRow(mat, i, true));
  const transposed = transpose(mat);
  transposed.forEach((_, i) => count += countSegmentsInRow(transposed, i, false));
  return count;
}
function countSegmentsInRow(mat, i, countLittle=false){
  let segements = 0;
  let lastCell = 0;
  for(const ind in mat[i]){
    const j = Number(ind);
    const cell = mat[i][j];
    if(cell===1)
      if(lastCell===0)
        if(!isVerticalChip(mat, i, j))
          if(countLittle || mat[i][j+1])
            segements++;
    lastCell=cell;
  }
  return segements;
}

function transpose(mat){
  return mat[0].map((_, colIndex) => mat.map(row => row[colIndex]));
}


function isVerticalChip(mat, i, j){
  return (mat[i-1] && mat[i-1][j]===1) || (mat[i+1] && mat[i+1][j]===1);
}

exports.solution = countChips;