//01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

//variables

// There are 3 ways to declare the variables

// 1.Let : When we want to mutate the value there we use let keyword to declare a variable.That also count for the case when we want to declare empty variable.

let age = 30;
console.log(age); // 30

age = 31; //mutated or reassigned the value
console.log(age); //31

let year; //empty variable
year = 1999;
console.log(year); //1999

// 2.Const : We use this to declare the variables that are not supposed to change at any point in the future.So the value of const variable cannot be changed.

const birthYear = 1999;
console.log(birthYear); //1999

//birthYear = 1997;
//console.log(birthYear); //Error

//***** We cannot declare empty const variable because it is not mutable. *****//

//const month;
//month=1999;
//console.log(month); //Error

// 3.Var : It is an old way of defining variable.It also allows mutation

var job = "programmer";
console.log(job); //programmer

job = "teacher";
console.log(job); //teacher

//***** It looks like var and let are very similar but there are lot of differences between them like let is block-scoped and var is function scoped. *****//

// String

const firstName = "Aman";

console.log(firstName); // Aman
console.log(typeof firstName); //string

const currentJob = "developer";
const myBirthYear = 1999;
const currentYear = 2023;

const aman =
  "I'm" +
  " " +
  firstName +
  " " +
  "a" +
  " " +
  (currentYear - myBirthYear) +
  " " +
  "years old" +
  " " +
  currentJob +
  "!";
console.log(aman); //I'm Aman a 24 years old developer!
console.log(typeof aman); //string

//Template literals : With template literals we can write strings in a more normal way and then basically insert the variables directly into the string and then they will simply be replaced.
//So,basically a template literal can assemble multiple pieces into one final string.

const amanNew = `I'm ${firstName} a ${
  currentYear - myBirthYear
} years old ${currentJob}!`;

console.log(amanNew); //I'm Aman a 24 years old developer!
console.log(typeof amanNew); //string

// Boolean

let javaScriptIsFun = true;
console.log(javaScriptIsFun); // true
console.log(typeof javaScriptIsFun); //boolean

// Undefined : Whenever we declare a empty variable the value of the variable will be undefined and the type-of variable is also undefined.

let currentMonth;
console.log(currentMonth); //undefined
console.log(typeof currentMonth); //undefined

// null : The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.(by mdn docs)

const shop = null;
console.log(shop); //null
console.log(typeof shop); // object
