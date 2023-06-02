//Given a sorted array of integers, write a function
//called search, that accepts a value and returns the index
//where the value passed to function is located.
//If the value is not found return -1

//O(n) time complexity linear search
function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

//Binary Search using the divide and concur method
//O(log(n))
function search2(arr, num) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < num) {
      min = middle - 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

(module.exports = search), search2;
