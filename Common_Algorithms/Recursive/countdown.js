//create a function called 'countDown' that uses recursion to
//down down from a given number until zero.

function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

//another example of recursion
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//Factorial iterative
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

//Factorial recursion
function factorialRecursion(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

module.exports = countDown;
