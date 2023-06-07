//Naive String Search
//count the number of times a small string of characters
//occur in a long string of characters

//create a function that takes two strings
//loop over the longer string
//loop over the shorter string
//if the characters dont match break out of the inner loop
//if the characters do match keep going
//if you complete the inner loop and find a match, increment the count of matches
//return the count

function naiveString(longStr, shortStr) {
  //set variable to hold count of short string repeats
  let total = 0;
  //loop through the long string
  for (let i = 0; i < longStr.length; i++) {
    //loop through the short string while in the long string
    for (let j = 0; j < shortStr.length; j++) {
      //conditional if character in short string does not match long string break out
      if (longStr[i + j] !== shortStr[j]) {
        break;
      }
      //conditional if j reaches the total length of the short string then those
      //characters are correct and total can be incremented
      if (j === shortStr.length - 1) {
        total++;
      }
    }
  }
  //return the total times the shortString is found in the longString
  return total;
}

module.exports = naiveString;
