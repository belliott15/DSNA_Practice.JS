//Given two strings, write a function called "validAnagram"
//to determine if the second string is an anagram of the first.

//try and do this in O(n) time using the frequency counter method

function validAnagram(str1, str2) {
  //if string lengths are different its impossible for them to be anagrams of eachother
  if (str1.length !== str2.length) {
    return false;
  }
  //set empty object to hold key value pairs
  const compare = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    //if letter exists, increment +1 otherwise set to to 1
    compare[letter] ? (compare[letter] += 1) : (compare[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    //if letter doesnt exist or value is 0 then its not an anagram and return false
    if (!compare[letter]) {
      return false;
    } else {
      //if letter does exist remove 1 from value in compare object
      compare[letter] -= 1;
    }
  }

  return true;
}

module.exports = validAnagram;
