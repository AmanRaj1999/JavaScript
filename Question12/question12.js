// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

var date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toDateString());
console.log(date.toGMTString());

// format date javascript
function dateFormater(date, separator) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  // show date and month in two digits
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // now we have day, month and year
  // use the separator to join them
  return year + separator + month + separator + day;
}

var now = new Date();
console.log(dateFormater(now, "-"));
