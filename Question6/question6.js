//06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

//split() :This method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.(Mdn docs)

const bigTech = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(bigTech.split(","));

//expected output:

// [
//     'Facebook',
//     ' Google',
//     ' Microsoft',
//     ' Apple',
//     ' IBM',
//     ' Oracle',
//     ' Amazon'
//   ]
