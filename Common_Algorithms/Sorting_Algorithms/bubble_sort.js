//Bubble Sorting
//sorting algorithm where the largest values bubble to the end
//comparing each item to the one next to it.
//if the item is supposed to be before the next item swap them

//swapping functionality

// function swap(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

//or

//ES2015
// const swap = (arr, idx1, idx2) => {
//   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// };

//Define a function that takes in an array
//start looping with a variable called i from the end of the array towards the beginning
//start an inner loop with a variable called j from the beginning until i -1
//if arr[j]is greater than arr[j+1] swap those two values
//return the sorted array

function bubbleSort(arr) {
  //loop through arr
  for (let i = arr.length; i > 0; i--) {
    //create an inner loop using j from the beginning
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//es2015 solution
function bubbleSwap2015(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//optimization of bubble sort
function bubbleSortOpt(arr) {
  let noSwaps;
  //loop through arr
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    //create an inner loop using j from the beginning
    for (let j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

(module.exports = bubbleSort), bubbleSwap2015, bubbleSortOpt;
