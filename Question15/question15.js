// 15. Write a program which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let studentScores = prompt("Enter your scores: ");

if (studentScores >= 90) {
  console.log("Your Grade : A");
} else if (studentScores >= 70 && studentScores <= 89) {
  console.log("Your Grade : B");
} else if (studentScores >= 60 && studentScores <= 69) {
  console.log("Your Grade : C");
} else if (studentScores >= 50 && studentScores <= 59) {
  console.log("Your Grade : D");
} else {
  console.log("Your Grade : F");
}
