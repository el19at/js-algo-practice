/*
Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

function join( words ) {
  let res = words[0];
  let minShared = res.length;
  for(const word of words.slice(1)){
    const charsToRemove = commonPrefixSuffixLen(res, word);
    if(charsToRemove<minShared)
      minShared = charsToRemove;
    res += word.substr(charsToRemove);
  }
  return [res, minShared];
}
function commonPrefixSuffixLen(suffixWord, prefixWord){
  const n = suffixWord.length;
  const m = prefixWord.length;
  let startInd = n<=m ? 0 : n-m;
  while(startInd < n){
    const currentSuffix = suffixWord.substr(startInd);
    const len = currentSuffix.length;
    const currentPrefix = prefixWord.substr(0, len);
    if(currentPrefix === currentSuffix)
      return len;
    startInd++;
  }
  return 0;
}

exports.solution = join;