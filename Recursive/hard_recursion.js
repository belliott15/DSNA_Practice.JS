//Reverse
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  newArray = [];

  if (str.length === 0) {
    return newArray;
  }

  newArray.push(str[str.length - 1]);

  newArray = newArray.concat(reverse(strArr.slice(0, strArr.length - 1)));
  return newArray;
}

//reverse('howdy') returns 'ydwoh'
//  step one = ['h']
//      step two = ['o', 'h']
//          step three = [']

//other way
//function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

//---------------------------------------------------------------------------------------//

//Is Palindrome
//Write a recursive function called isPalindrome which returns true if the string passed
//to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  // working from first and last letter move inward
  //if there is a singular letter left it is a palindrome.
  if (str.length === 1) return true;
  //if the two center letters are the same then the word
  //is a palindrome
  if (str.length === 2) return str[0] === str[1];
  //if the first and last letters are the same continue
  //with the function
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  //if none of these statements are true the word is not a
  //palindrome
  return false;
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

//---------------------------------------------------------------------------------------//

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
  // add whatever parameters you deem necessary - good luck!
  //if nothing in the array causes the callback to return true
  //return false
  if (arr.length === 0) return false;
  //if the callback is true with the first item in the array
  //return true
  if (callback(arr[0])) return true;
  //if the array isnt empty and the callback isnt true
  //move to the next item in the array
  //once you have gone through the entire array and the callback
  //still isnt true return false as the arr.length is zero.
  return someRecursive(arr.slice(1), callback);
}

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

//---------------------------------------------------------------------------------------//

//Flatten
//Write a recursive function called flatten which accepts an array of arrays
//and returns a new array with all values flattened.

function flatten(oldArr) {
  //set arrayed variable to hold all new content
  var newArr = [];
  //loop through the oldArr
  for (var i = 0; i < oldArr.length; i++) {
    //find out if the item in the array is an array
    if (Array.isArray(oldArr[i])) {
      //if it is an array concat to stack the function
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      //if the content is not an array push it to the
      //newArr array.
      newArr.push(oldArr[i]);
    }
  }
  //once you have looped through the entire array set return
  //the newArr
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

//---------------------------------------------------------------------------------------//
