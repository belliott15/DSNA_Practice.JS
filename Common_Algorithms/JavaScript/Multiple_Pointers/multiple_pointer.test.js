const sumZero = require("./multiple_pointer.js");

test(`function that will start at either end of an array and return
    the first pair where the sum is zero`, () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toBe([-3, 3]);

  expect(sumZero([-2, 0, 1, 3])).toBe(undefined);

  expect(sumZero([1, 2, 3])).toBe(undefined);
});
