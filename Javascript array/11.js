// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers

function myFunction(a) {
  return a.reduce((a, cur) => a + cur, 0);
}
