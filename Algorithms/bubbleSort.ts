const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    let cntr = 0
    while (cntr < arrayLength - 1) {
      if (array[cntr] > array[cntr + 1]) {
        let tmp = array[cntr + 1];
        array[cntr + 1] = array[cntr];
        array[cntr] = tmp;
      }
      cntr++
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
