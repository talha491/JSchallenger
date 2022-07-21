// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number

function myFunction(a) {
  function isPrime(a) {
    for (let i = 2; i * i <= a; i++) if (a % i === 0) return false;
    return a > 1;
  }
  function getNextPrime(a) {
    let count = a + 1;
    while (!isPrime(count)) {
      count++;
    }
    return count;
  }
  return isPrime(a) ? a : getNextPrime(a);
}
