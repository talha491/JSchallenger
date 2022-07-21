// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

function myFunction(a, b) {
    
  let arr = a.split("");
  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, b);
  }
  return arr.join("");
  console.log(myFunction("1234567", "."));
  console.log(myFunction("abcde", "$"));
  console.log(myFunction("zxyzxyzxyzxyzxyz", "w"));
}
