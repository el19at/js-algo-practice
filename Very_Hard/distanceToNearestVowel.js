/*
WWrite a function that takes in a string and for each character, returns the distance to the nearest vowel. If the character is a vowel itself, return 0.

Examples
distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]
Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.
*/

function distanceToNearestVowel(str) {
  const res = [];
  const vowelsPos = []
  const n = str.length;
  str.split('').forEach((c, i) =>
  {
    if(isVowel(c))
      vowelsPos.push(i);
  }
  );
  let before = 0;
  let after = 0;
  for(let i=0; i<n ; i++){
    if(after >= vowelsPos.length){
      res.push(distance(i, vowelsPos[before]));
      continue;
    }
    if(i<vowelsPos[before]){
      res.push(distance(vowelsPos[before], i));
      continue;
    }
      if(i===vowelsPos[before]){
      after++;
      res.push(0);
      continue;
    }
    if(vowelsPos[before] < i && i < vowelsPos[after]){
      res.push(Math.min(distance(i, vowelsPos[before]), distance(i, vowelsPos[after])))
      continue;
    }
    if(vowelsPos[after]===i){
      before++;
      after++;
      res.push(0);
      continue;
    }
  }
  return res;
}
function distance(a, b){
  return Math.abs(a-b);
}
function isVowel(c){
  return (new Set(['a', 'e', 'i', 'o', 'u'])).has(c);
}

exports.solution = distanceToNearestVowel;
