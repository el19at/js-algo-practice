/*
Write a function that returns true if a string consists of ascending or ascending AND consecutive numbers.

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

function myAscending( str ) {
  const n = str.length;
  const maxNumSize = Math.ceil(n/2);
  for(let size = maxNumSize; size>0; size--){ // O(n//2) * O(n) => O(n^2)
    const arr = makeArray(str, size); // O(n)
    if (isAsending(arr)) // O(n)
      return true;
  }
  return false;
}
function isAsending(arr){
  if(arr.length<2)
    return false;
  let lastNum = arr[0]-1;
  for(const num of arr){
    if(!(num - lastNum === 1))
      return false;
    lastNum = num;
  }
  return true;
}
function makeArray(str, len){
  const res = [];
  const arrLen = Math.ceil(str.length/len);
  for(let i  = 0;i<arrLen;i++){
    const startSubString = i*len;
    res.push(Number(str.substr(startSubString, len)));
  }
  return res;
}
function ascending( str ){
  const n = str.length;
  for(let starterSize = 1; starterSize <= n/2; starterSize++){
    let flag = true;
    let i = 0;
    let currentSize = starterSize;
    while(i<n-currentSize){
      const currentStr = str.substr(i, starterSize);
      const currentNum = Number(currentStr);
      const expectedNum = currentNum+1;
      const expectedStr = String(expectedNum);
      if(currentStr.length < expectedStr.length)
        currentSize++;
      let nextStr = str.substr(i+currentSize, currentSize)
      if(expectedStr !== nextStr){
        flag = false;
        break;
      }
      i += currentSize;
    }
    if(flag)
      return true;
  }
  return false;
}
ascending("444445")
exports.solution = ascending;