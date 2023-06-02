//Create a function called 'same' with an input of two arrays
//determine if array 2 has the squared values of array 1 and
//return true or false

//UNIT TEST
//same([1, 3, 4, 5], [25, 16, 9, 1]) - should return true no mater the order of array 2

//UNIT TEST
//same([5, 3, 2, 5], [9, 25, 4]) - should return false because array lengths do not match

//Determine time and space complexity

//O(n^2) time complexity due to the indexof function within a for loop
function same(arr1, arr2) {
  //if arr1 and arr2 are different lengths return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  //loop through one array
  for (let i = 0; i < arr1.length; i++) {
    //determine the index at which the squared number is in the second array
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    //if the squared number does not exist return false
    if (correctIndex === -1) {
      return false;
    }
    //remove item from second array so it cannot be used again
    arr2.splice(correctIndex, 1);
  }
  //if you have gotten through the entire array without returning false, then return true
  return true;
}

//Refactored so O(3n)
//loop through three different arrays rather than a single array
//in a factored fashion
function same2(arr1, arr2) {
  //array 1 length must match array 2 length
  if (arr1.length !== arr2.length) {
    return false;
  }

  //set object variables to hold quantity of each number
  let freqCounter1 = {};
  let freqCounter2 = {};

  //loop through first array to create freqCounter1 object
  for (let item of arr1) {
    freqCounter1[item] = (freqCounter1[item] || 0) + 1;
  }

  //loop through second array to create freqCounter2 object
  for (let item of arr2) {
    freqCounter2[item] = (freqCounter2[item] || 0) + 1;
  }

  //loop through first object to get keys
  for (let key in freqCounter1) {
    //if the square of the key doesnt exist in the second array return false
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    //if the frequency of each number isnt the same return false
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  //if the values match from the first and second objects return true
  return true;
}

(module.exports = same), same2;
