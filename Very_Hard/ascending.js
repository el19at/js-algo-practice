/*
Write a function that returns true if a string consists of ascending AND consecutive numbers.

Examples
ascending("232425") ➞ true
// Consecutive numbers 23, 24, 25

ascending("2324256") ➞ false
// No matter how this string is divided, the numbers are not consecutive.

ascending("444445") ➞ true
// Consecutive numbers 444 and 445.
Notes
A number can consist of any number of digits, so long as the numbers are adjacent to each other, and the string has at least two of them.
*/

function ascending( str ){
  const n = str.length;
  for(let starterSize = 1; starterSize <= n/2; starterSize++){ // o(n)
    let isAscending = true;
    let i = 0;
    let currentSize = starterSize;
    while(i<n-currentSize){
      const currentStr = str.substr(i, currentSize);
      const currentNum = Number(currentStr);
      const expectedNum = currentNum+1;
      const expectedStr = String(expectedNum);
      const from = i + currentSize;
      let sizeInc = currentStr.length < expectedStr.length;
      currentSize += Number(sizeInc);
      let nextStr = str.substr(from, currentSize);
      if(expectedStr !== nextStr){
        isAscending = false;
        break;
      }
      i += currentSize - sizeInc;
    }
    if(isAscending)
      return true;
  }
  return false;
}
console.log(ascending("111111"))
exports.solution = ascending;