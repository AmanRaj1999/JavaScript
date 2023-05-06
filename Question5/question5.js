//05. Declare a varibale and assign string value to it and then split it into an array using split() method.

//split method():This method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.(Mdn docs)

let name = "Aman Raj";
console.log(name.split()); //Expected output: [ 'Aman Raj' ]

let myName = "Aman Raj";
console.log(name.split(""));
// Expected output:
// [
//     'A', 'm', 'a',
//     'n', ' ', 'R',
//     'a', 'j'
//   ]
