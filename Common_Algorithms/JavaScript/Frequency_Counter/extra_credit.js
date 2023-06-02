//Write a function called 'sameFrequency'.  Given two positive
//integers, find out if the two numbers have the same frequency
//of Digits.  Try and use frequency counting and a time complexity of O(n)

function sameFrequency(input1, input2) {
  //switch inputs into strings to loop through
  const num1 = input1.toString();
  const num2 = input2.toString();

  //create an object to hold key value pairs of each digit
  let numObject = {};
  for (let digit of num1) {
    numObject[digit] ? (numObject[digit] += 1) : (numObject[digit] = 1);
  }

  for (let digit of num2) {
    if (!numObject[digit]) return false;
    numObject[digit] -= 1;
  }

  return true;
}

module.exports = sameFrequency;
