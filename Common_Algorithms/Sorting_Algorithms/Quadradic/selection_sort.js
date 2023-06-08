//Selection Sort
//Moving from beginning to end to find single item first
//moves through the array and swaps the lowest item in the array at the beginning
//then moves through the array again to

//Store the first element as the smallest value youve seen so far.
//compare this item to the next item in the array until you find a smaller number
//If a smaller number is found designate that smaller number to be the new
//minimum and continue to the end of the array
//if the minimum is not the value (index) you initially began with swap the two values
//repeat this with the next element until the array is sorted

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

module.exports = selectionSort;
