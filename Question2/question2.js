//02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// We use string literals for  interploation of string.
//Template literals : With template literals we can write strings in a more normal way and then basically insert the variables directly into the string and then they will simply be replaced.
//So,basically a template literal can assemble multiple pieces into one final string.

const myFirstName = "Aman";
const lastName = "Raj";
let maritalStatus = "Single";
let country = "India";
let myAge = 24;
const myInfo = `I'm ${myFirstName} ${lastName} a ${myAge} years old , ${maritalStatus} and I live in ${country}.`;
console.log(myInfo);
