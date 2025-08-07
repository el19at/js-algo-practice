/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lastCommonMultiple(a, b) {
  if (a<b)
    a, b = b, a;
  return a*b/gcd(a, b);
}

// assume b<a
function gcd(a, b){
  if(b===0)
    return a
  return gcd(b, a%b);
}

exports.solution = lastCommonMultiple;
