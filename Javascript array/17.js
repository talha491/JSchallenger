// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

function myFunction(a, b) {
  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
