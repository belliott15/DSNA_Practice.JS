//linear search will visit one item at a time until that item is found
//function that accepts an array and a value
//loop through the array and check if the current array element is equal to
//the value
//if it is return the index at which the element is found
//if the value is never found return -1

function linearSearch(arr, item) {
  //loop through the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

//linearSearch([1, 234, 76, 34, 2, 11, 98], 2) // 4
//linearSearch([1, 6, 5, 23, 7, 1, 6, 0], 2) // -1
//linearSearch([], 1) // -1

module.exports = linearSearch;
