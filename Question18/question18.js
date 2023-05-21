// 18. Write a program which tells the number of days in a month, now consider leap year.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

function getNumberOfDays(month, year) {
  const daysInMonth = {
    0: 31, // January
    1: isLeapYear(year) ? 29 : 28, // February
    2: 31, // March
    3: 30, // April
    4: 31, // May
    5: 30, // June
    6: 31, // July
    7: 31, // August
    8: 30, // September
    9: 31, // October
    10: 30, // November
    11: 31, // December
  };

  return daysInMonth[month];
}

// Example usage:
const month = 2; // March (0-based index, so 2 represents March)
const year = 2023;

const numberOfDays = getNumberOfDays(month, year);
console.log(
  `Number of days in month ${month + 1} of year ${year}: ${numberOfDays}`
);
