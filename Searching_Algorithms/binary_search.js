//Function accepts a sorted array and a value
//create a left pointer and a right pointer for a start and end of the array
//create a middle pointer and if the value is too small move the left pointer up
//if the value is too large move the right pointer down
//if the value is never found return -1

// function binarySearch(arr, val) {
//   if (arr.length < 1) {
//     return -1;
//   }
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((left + right) / 2);

//   while (arr[middle] !== val && left <= right) {
//     if (val < arr[middle]) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//     middle = Math.floor((left + right) / 2);
//   }
//   return arr[middle] === val ? middle : -1;
// }

//refactored

function binarySearch(arr, val) {
  if (arr.length < 1) {
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

module.exports = binarySearch;
