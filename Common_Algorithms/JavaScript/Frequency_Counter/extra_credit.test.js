const sameFrequency = require("./extra_credit.js");

test("Take two numbers and determine if they have the same frequency of digits in each number", () => {
  //standard true statement numbers are rearranged but same digits
  expect(sameFrequency(1234, 4213)).toBe(true);

  //numbers are different lengths should return false
  expect(sameFrequency(12356, 1253267)).toBe(false);

  //numbers are same length but different freq of each digit
  expect(sameFrequency(123456, 145678)).toBe(false);
});
