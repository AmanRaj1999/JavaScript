//08. Demonstrate the use of trim() to remove any trailing whitespace at the beginning and the end of a string.

// trim() :The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.

//To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const sentence = "    Aman Raj    ";
console.log(sentence); //   Aman Raj
console.log(sentence.trim()); //Aman Raj

const statement = "   Aman Raj";
console.log(statement.trimStart());
