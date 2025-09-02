/*
A wristband can have 4 patterns:

horizontal: each item in a row is identical.
vertical: each item in a column is identical.
diagonal left: each item is identical to the one on it's upper left or bottom right.
diagonal right: each item is identical to the one on it's upper right or bottom left.
You are shown an incomplete section of a wristband.

Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

Examples
isWristband([
 ["A", "A"],
 ["B", "B"],
 ["C", "C"]
]) ➞ true 
// Part of horizontal wristband.

isWristband([
 ["A", "B"],
 ["A", "B"],
 ["A", "B"]
]) ➞ true 
// Part of vertical wristband.

isWristband([
 ["A", "B", "C"],
 ["C", "A", "B"],
 ["B", "C", "A"],
 ["A", "B", "C"]
]) ➞ true
// Part of diagonal left wristband.

isWristband([
 ["A", "B", "C"],
 ["B", "C", "A"],
 ["C", "A", "B"],
 ["A", "B", "A"]
]) ➞ true
// Part of diagonal right wristband.
*/

function isWristband(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],   
    [1, -1]   
  ];

  function checkDirection(dr, dc) {
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const nr = r - dr;
          const nc = c - dc;
          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            if (mat[r][c] !== mat[nr][nc]) return false;
          }
        }
      }
      return true;
    }

  return directions.some(([dr, dc]) => checkDirection(dr, dc));
}
isWristband([["A", "B", "C"],
             ["C", "A", "B"],
             ["B", "C", "A"],
             ["A", "B", "C"]]);
exports.solution = isWristband; 