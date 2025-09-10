/*
Write an island counter for a 2D matrix. This function should return the number
of distinct islands present.

An island is a group of connected 1s (*vertically* or *horizontally* connected).
0 represents water. Islands are distinct if they are separate connected groups.

Examples

islandCounter([
  [1,1,0,0,0],
  [1,1,0,1,1],
  [0,0,0,1,1],
  [0,0,0,0,0],
  [1,1,0,0,1]
]) ➞ 4

islandCounter([
  [1,0,0],
  [0,1,0],
  [0,0,0]
]) ➞ 2
*/

function islandCounter(mat) {
  const n = mat.length;
  const m = mat[0].length;
  const toVisit = new Set();

  for(let i=0;i<n;i++)
    for(let j=0;j<m;j++)
      toVisit.add(arrayToStr([i,j]));

  let counter = 0;
  while(toVisit.size){
    const [i,j] = strToArr([...toVisit][0]); 
    if(discoverIsland(mat, toVisit, i, j))
      counter++;
  }

  return counter;
}

function discoverIsland(mat, toVisit, i, j){
  if(!toVisit.has(arrayToStr([i,j])))
    return false;

  toVisit.delete(arrayToStr([i,j]));
  if(!mat[i][j])
    return false;

  const neibs = [[i-1,j],[i+1,j],[i,j-1],[i,j+1]];
  neibs.forEach(cell=>discoverIsland(mat, toVisit, cell[0], cell[1]));
  return true;
}

function arrayToStr(arr){
  return arr.toString();
}

function strToArr(str){
  return Array.from(str.split(","), Number);
}

exports.solution = islandCounter;

const a = new Set([[1,2]]);
console.log(a.has([1,2]));