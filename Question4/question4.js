//04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

//include() : This method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.(Mdn docs).

const javaScriptIsFun = "I love JavaScript";
const searchWord = "Script";

console.log(javaScriptIsFun.includes(searchWord)); //true

const sentence = "Hey, I love JavaScript";

const word = "Script";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "Script" is in the sentence"
