// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// let userInput = prompt("Enter the month: ");

// if (
//   (userInput == "September" && userInput == "October") ||
//   userInput == "November"
// ) {
//   console.log("The season is Autum");
// } else if (
//   (userInput == "December" && userInput == "January") ||
//   userInput == "February"
// ) {
//   console.log("The season is Winter");
// } else if (
//   (userInput == "March" && userInput == "April") ||
//   userInput == "May"
// ) {
//   console.log("The season is Spring");
// } else if (
//   (userInput == "June" && userInput == "July") ||
//   userInput == "August"
// ) {
//   console.log("The season is Summer");
// }

function checkSeason(month) {
  const autumnMonths = ["September", "October", "November"];
  const winterMonths = ["December", "January", "February"];
  const springMonths = ["March", "April", "May"];
  const summerMonths = ["June", "July", "August"];

  if (autumnMonths.includes(month)) {
    return "Autumn";
  } else if (winterMonths.includes(month)) {
    return "Winter";
  } else if (springMonths.includes(month)) {
    return "Spring";
  } else if (summerMonths.includes(month)) {
    return "Summer";
  } else {
    return "Invalid month";
  }
}

// Example usage:
const userInput = prompt("Enter a month:");
const season = checkSeason(userInput);
console.log("The season is:", season);
