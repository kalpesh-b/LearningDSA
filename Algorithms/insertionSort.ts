const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const arrayLength = array.length

  for (let i = 0; i < arrayLength; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //find where the number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          //move number to right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }

  }
}

insertionSort(numbers);
console.log(numbers);
