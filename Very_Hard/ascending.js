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
  for(let starterSize = 1; starterSize <= n/2; starterSize++){
    let flag = true;
    let i = 0;
    let currentSize = starterSize;
    while(i<n-currentSize){
      const currentStr = str.substr(i, currentSize);
      const currentNum = Number(currentStr);
      const expectedNum = currentNum+1;
      const expectedStr = String(expectedNum);
      const from = i + currentSize;
      let sizeInc = false;
      if(currentStr.length < expectedStr.length){
        currentSize++;
        sizeInc = true;
      }
      let nextStr = str.substr(from, currentSize);
      if(expectedStr !== nextStr){
        flag = false;
        break;
      }
      i += currentSize - (sizeInc? 1 : 0);
    }
    if(flag)
      return true;
  }
  return false;
}
//console.log(ascending("99100101"));
console.log(ascending("9899100101"));
exports.solution = ascending;