//Write a function called 'maxSubarraySum' which accepts
//an array of integers and a number called 'n'
//the function should calculate the maximum sum of 'n'
//consecutive elements in the array

//O(n^2) time complexity and
function maxSubarraySum(arr, n) {
  //conditional to catch empty arrays or where n it too large
  if (arr.length < n || arr.length === 0) {
    return null;
  }
  //set a variable to hold the largest number, might be negative
  let max = -Infinity;
  //loop through array stopping n spots away from the end
  for (let i = 0; i < arr.length - n + 1; i++) {
    //set temporary variable to hold numbers
    let temp = 0;

    for (let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//using the sliding window approach
//Time complexity - O(n)
function maxSubarraySum2(arr, n) {
  //set variable to hold largest sum
  let maxSum = 0;
  //set variable to hold other sums
  let tempSum = 0;
  //if array is empty or smaller than n return null
  if (arr.length < num || arr.length == 0) return null;
  //loop through first grouping to get max sum of first iteration
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  //temp sum will hold first iteration and change when a new higher sum is found
  tempSum = maxSum;
  //loop through starting at n and moving forward 1 index while subtracting previous index
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    //or
    // if (tempSum > maxSum){
    //  maxSum = tempSum
    //}
  }
  return maxSum;
}

(module.exports = maxSubarraySum), maxSubarraySum2;
