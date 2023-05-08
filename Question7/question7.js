//07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

// lastIndexOf() :This method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.(mdn docs)

let student = [1, 2, 3, 4, "pwskills", 6, 7, 8, 9, "pwskills"];
// let searchTerm = "pw skills";
console.log(student.lastIndexOf("pwskills")); //
