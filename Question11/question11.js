// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

//     - What is the year today?

const now = new Date(); //2023-05-14T18:35:38.636Z
console.log(now);

// console.log(now.getFullYear()); //2023

//     - What is the month today as a number?

// console.log(now.getMonth()); // 4, because months are zero based or january starts from zero

//     - What is the day today as a number?

// console.log(Number(now)); //1684089987782

//     - What is the hours now?

// console.log(now.getHours()); //11

//     - What is the minutes now?

// console.log(now.getMinutes()); //54

//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
const old = Date(1970, 0, 1, 0, 0);
var diff = now.getTime() - old.getTime();
console.log(diff);
