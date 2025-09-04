/*
Write a function that sorts array while keeping the array structure. Numbers should be first then letters both in ascending order.

Examples
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]) ➞ [
 [1, 2, 3, 4, 5, 6],
 [7, 8, "a"],
 ["b", "c"], ["d", "e", "f"]
]

numThenChar([
 [1, 2, 4.4, "f", "a", "b"],
 [0], [0.5, "d","X",3,"s"],
 ["f", "e", 8],
 ["p","Y","Z"],
 [12,18]
]) ➞ [
 [0, 0.5, 1, 2, 3, 4.4],
 [8],
 [12, 18, "X", "Y", "Z"],
 ["a", "b", "d"],
 ["e", "f", "f"],
 ["p", "s"]
]
Notes
Test cases will containg integer and float numbers and single letters.
*/

function numThenChar( arrs ) {
  const all = [];
  for(const arr of arrs)
    for(const element of arr)
      all.push(element)
  all.sort(sortBy);
  let arrInd = 0;
  let inArrInd = 0;
  for(const element of all){
    if(inArrInd >= arrs[arrInd].length){
      arrInd ++;
      inArrInd = 0;
    }
    arrs[arrInd][inArrInd] = element;
    inArrInd++;
  }
  return arrs;
}
function sortBy(a, b){
  const typeOfA = typeof a;
  const typeOfB = typeof b;
  if(typeOfA === typeOfB){
    return typeOfA === typeof 's'? a.charCodeAt(0) - b.charCodeAt(0):
                                    a-b;
  }
  if(typeOfA === typeof 1)
    return -1;
  return 1

}
numThenChar([
 [1, 2, 4, 3, "a", "b"],
 [6, "c", 5], [7, "d"],
 ["f", "e", 8]
]);
exports.solution = numThenChar;