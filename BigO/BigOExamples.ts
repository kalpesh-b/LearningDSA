const nemoArr = ['nemo'];
const everyoneArr = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bolat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArr = new Array(100000).fill('nemo');

function findNemo(array: any[]) {
  for (let i = 0; i < array.length; i++) {
    console.log('Found nemo'); // -> O(n)
  }
}

findNemoArr(everyone);  // O(n)  --> Linear Time

function logFirstBox(boxes: any[]) {
  console.log(boxes[0]); // -> O(1)
}
logFirstBox(everyoneArr); // O(1) --> Constant Time

function logFirstTwoBoxes(boxes: any[]) {
  console.log(boxes[0]); // -> O(1)
  console.log(boxes[1]); // -> O(1)
}
logFirstTwoBoxes(everyoneArr); // O(1+1) = O(2) => O(1) --> Constant Time

function compressBoxesTwice(box1: any[], box2: any[]) {
  box1.forEach(box => {  // O(a)
    console.log(box)
  });
  box2.forEach(box => {  // O(b)
    console.log(box)
  });
}
const box1 = [2, 4, 6, 7];
const box2 = [5, 7, 2];
compressBoxesTwice(box1, box2); // O(a * b) => O(n^2)  --> Quadratic Time

function logAllPairs(array: any[]) {
  for (let i = 0; i < array.length; i++) {  // O(n)
    for (let j = 0; j < array.length; j++) { // O(n)
      console.log(array[i], ' ', array[j]);
    }
  }
}

logAllPairs(everyoneArr); // O(n * n) => O(n^2)  --> Quadratic Time
