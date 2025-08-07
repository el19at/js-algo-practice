/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize( num ) {
  let currentDivisor = 2;
  const factors = [];
  while(num>1 && currentDivisor <= num){
    if(num % currentDivisor === 0){
      num /= currentDivisor;
      factors.push(currentDivisor)
    }
    else
      currentDivisor = findNextPrime(currentDivisor, Math.sqrt(num));
      if(!currentDivisor){
        factors.push(num);
        break;
      }
  }
  return factors;
}
function findNextPrime(num, limit){
  num++;
  while(num<=limit){
    if(isPrime(num))
      return num;
    num++;
  }
  return 0;
}
function isPrime(num){
  for(let i = 2;i<=Math.sqrt(num);i++)
    if(num % i === 0)
      return false
  return true
}

exports.solution = primeFactorize;