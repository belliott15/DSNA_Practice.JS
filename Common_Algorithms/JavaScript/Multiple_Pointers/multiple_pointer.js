//Write a function called sumZero which accepts a sorted
//array of integers. The function should find the first pair
//where the sum is 0. Return an array that includes both
//values that sum to zero or undefined if a pair does not exist

//time complexity : O(n^2)
//space complexity: O(1)

function sumZero(arr) {
  //loop through array and compare it against all other numbers in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //if the addition of two numbers equal zero return those two numbers
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

(module.exports = sumZero), sumZero2;
