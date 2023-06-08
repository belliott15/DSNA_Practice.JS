//Insertion Sort
//builds up the sort by gradually creating a larger left half which is always sorted

//Start by picking the second element in the array
//now compare the second element with the one before it and swap if necesary
//continue to the next element and if it is in the incorrect order, iterate
//through the sorted portion to place the element in the correct place
//repeat until the array is sorted

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i];
//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[i] = currentVal;
//     console.log(arr);
//   }
//   return arr;
// }

//this is deprecated code.  no use for this
