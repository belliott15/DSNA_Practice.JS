//Power
//Write a function called power which accepts a base and an exponent.
//The function should return the power of the base to the exponent.
//This function should mimic the functionality of Math.pow()
//- do not worry about negative bases and exponents.

function power(base, exp) {
  // create a way to exit the recursive function
  if (exp === 0) {
    return 1;
  }
  //create a recursion that can be used to decrease exp while maintaining base
  return base * power(base, exp - 1);
}

//power(2, 4)
//  first step = 2 * power(2, 3) returns 16
//      second step = 2 * power(2, 2) returns 8
//          third step = 2 * power(2, 1) returns 4
//              fourth step = 2 * power(2, 0) returns 2

//Factorial
//Write a function factorial which accepts a number and returns
//the factorial of that number. A factorial is the product of an integer
//and all the integers below it; e.g., factorial four ( 4! ) is equal to
//24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
  //create a base case
  if (num === 0) {
    return 1;
  }
  //use recursion to create a stack
  return num * factorial(num - 1);
}

//factorial(3) should return 6
//  first step = 3 * factorial(2) return 6
//      second step = 2 * factorial(1) return 2
//          third step = 1 * factorial(0) return 1
//              fourth step = base case return 1

//Product of Array
//Write a function called productOfArray which takes in an array
//of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//productOfArray([1, 2, 6, 7]) should equal 84
//  first step = 1 * productOfArray([2, 6, 7]) return 84
//      second step = 2 * productOfArray([6, 7]) return 84
//          third step = 6 * productOfArray([7]) return 42
//              fourth step = return arr[0]  return 7
