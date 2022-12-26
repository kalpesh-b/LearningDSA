// Rule Book
// 1> WorstCase
// 2> Remove Constants
// 3> Different terms for inputs
// 4> Drop non-dominant


// 1> WorstCase
const everyoneArr1 = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bolat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array: any[]) {
  for (let i = 0; i < array.length; i++) {
    console.log('Found nemo'); // -> O(n)
  }
}
findNemoArr(everyone);  // O(n)  --> Linear Time

// 2> Remove Constants
function logFirstTwoBoxes(boxes: any[]) {
  console.log(boxes[0]); // -> O(1)
  console.log(boxes[1]); // -> O(1)
}
logFirstTwoBoxes(everyoneArr); // O(1+1) = O(2) => O(1) --> Constant Time

// 3> Different terms for inputs
function compressBoxesTwice(box1: any[], box2: any[]) {
  box1.forEach(box => {  // O(a)
    console.log(box)
  });
  box2.forEach(box => {  // O(b)
    console.log(box)
  });
}
const box3 = [2, 4, 6, 7];
const box4 = [5, 7, 2];
compressBoxesTwice(box1, box2); // O(a * b) => O(n^2)  --> Quadratic Time

// 4> Drop non-dominant
function printAllNumbersThenAllPairSums(numbers: any[]) {
  numbers.forEach(number => {  // O(n)
    console.log(number)
  });
  numbers.forEach(firstNumber => {  // O(n)
    numbers.forEach(secondNumber => {  // O(n)
      console.log(firstNumber + secondNumber)
    });
  });
}
const numbers = [2, 4, 6, 7];
printAllNumbersThenAllPairSums(numbers); // O(n + n^2) => O(n^2)
