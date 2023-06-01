const maxSubarraySum = require("./sliding_window.js");
const maxSubarraySum2 = require("./sliding_window.js");

test("Given an array and n determine the largest sum of consecutive numbers", () => {
  expect(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toBe(19);

  expect(maxSubarraySum([2, 6, 9], 2)).toBe(15);

  expect(
    maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3, 7, 3, 5, 6, 2, 43, 1], 6)
  ).toBe(66);

  expect(maxSubarraySum([2, 6], 4)).toBe(null);
});

test("Given an array and n determine the largest sum of consecutive numbers", () => {
  expect(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).toBe(19);

  expect(
    maxSubarraySum2(
      [2, 7, 7, 5, 57, 35, 24, 7, 1, 3, 5, 8, 9, 32, 45, 34, 546, 2, 1, 43, 33],
      4
    )
  ).toBe(657);

  expect(
    maxSubarraySum2([2, 1, 2, 43, 44, 1, 1, 1, 1, 1, 1, 1, 1111, 1], 3)
  ).toBe(1113);

  expect(maxSubarraySum2([1, 2], 3)).toBe(null);
});
