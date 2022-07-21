// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
    return Math.round((a + Number.EPSILON) * 100) / 100
  }
  