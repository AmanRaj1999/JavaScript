//09. Boolean value is either true or false.
// - Write three JavaScript statement example which provide truthy value.
// - Write three JavaScript statement example which provide falsy value.

//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.(mdn docs)

if (1) {
  console.log("Hello World!");
} else {
  console.log("Hey everyone!");
}

//expected output: Hello world!

let aman = true;
if (aman) {
  console.log("keep it up");
} else {
  console.log("learn more");
}
//expected output: keep it up

console.log(Boolean("Aman")); //true

//falsy values
console.log(Boolean(null)); //false

console.log(Boolean(0)); //flase

console.log(Boolean(undefined)); //false
