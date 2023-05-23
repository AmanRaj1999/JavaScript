// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// - Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort(); // Sort the array in ascending order
const minAge = ages[0]; // Minimum age is the first element after sorting
const maxAge = ages[ages.length - 1]; // Maximum age is the last element after sorting

console.log("Minimum age:", minAge);
console.log("Maximum age:", maxAge);

// - Find the median age(one middle item or two middle items divided by two)
let medianAge;
const middleIndex = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  // Array has even length, take the average of the two middle values
  medianAge = (ages[middleIndex] + ages[middleIndex - 1]) / 2;
} else {
  // Array has odd length, take the middle value
  medianAge = ages[middleIndex];
}

console.log("Median age:", medianAge);

//     - Find the average age(all items divided by number of items)
const sum = ages.reduce((total, age) => total + age, 0);
const averageAge = sum / ages.length;

console.log("Average age:", averageAge);

//     - Find the range of the ages(max minus min)

const ageRange = maxAge - minAge;

console.log("Age range:", ageRange);

//     - Compare the value of (min - average) and (max - average), use abs() method
const minAverageDiff = Math.abs(minAge - averageAge);
const maxAverageDiff = Math.abs(maxAge - averageAge);

console.log("Absolute difference between min and average:", minAverageDiff);
console.log("Absolute difference between max and average:", maxAverageDiff);
