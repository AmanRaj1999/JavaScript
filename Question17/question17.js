// 17. Write a program which tells the number of days in a month.
// function getDaysInMonth(year, month) {
//   return new Date(year, month, 0).getDate();
// }

// const date = new Date();
// const currentYear = date.getFullYear();
// const currentMonth = date.getMonth() + 1; // 👈️ months are 0-based

// //  Current Month
// const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
// console.log(daysInCurrentMonth); // 👉️ 31

// // Other Months
// const daysInJanuary = getDaysInMonth(2025, 1);
// console.log(daysInJanuary); // 👉️ 31

// const daysInSeptember = getDaysInMonth(2025, 9);
// console.log(daysInSeptember); //

function getDaysInMonth(month, year) {
  // January is month 0, February is month 1, and so on
  const monthIndex = month - 1;

  // Create a date object for the first day of the next month
  const date = new Date(year, monthIndex + 1, 1);

  // Subtract one day from the first day of the next month
  // to get the last day of the given month
  date.setDate(date.getDate() - 1);

  // Return the day of the month (number of days)
  return date.getDate();
}

// Example usage:
const month = 2; // February
const year = 2023;
const daysInMonth = getDaysInMonth(month, year);
console.log(`Number of days in month ${month} of ${year}: ${daysInMonth}`);
