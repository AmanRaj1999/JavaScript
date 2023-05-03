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

// Var : It is an old way of defining variable.It also allows mutation

var job = "programmer";
console.log(job); //programmer

job = "teacher";
console.log(job); //teacher

//***** It looks like var and let are very similar but there are lot of differences between them like let is block-scoped and var is function scoped. *****//
