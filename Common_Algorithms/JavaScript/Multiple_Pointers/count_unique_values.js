//implement a function called countUniqueValues
//which accepts a sorted array, and counts the unique
//values in the array. there can be negative numbers in
//the array but it will always be sorted

//try and solve using multiple pointer method
//O(n) time complexity
//O(1) space complexity
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sortedArr = arr.sort();
  let first = 0;
  let second = 1;

  while (second < arr.length) {
    if (sortedArr[first] !== sortedArr[second]) {
      first++;
      sortedArr[first] = sortedArr[second];
      second++;
    } else if (sortedArr[first] === sortedArr[second]) {
      second++;
    }
  }
  return first + 1;
}

//other option
// function countUniqueValuesExample(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (var j = j; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

module.exports = countUniqueValues;
