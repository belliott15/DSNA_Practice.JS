const sumZero = require("./multiple_pointer.js");
const sumZero2 = require("./multiple_pointer.js");

test(`function that will start at either end of an array and return
    the first pair where the sum is zero`, () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);

  expect(sumZero([-2, 0, 1, 3])).toStrictEqual(undefined);

  expect(sumZero([1, 2, 3])).toStrictEqual(undefined);
});

test(`function that will start at either end of an array and return
    the first pair where the sum is zero`, () => {
  expect(sumZero2([-3, -2, -1, 0, 1, 2, 3])).toStrictEqual([-3, 3]);

  expect(sumZero2([-2, 0, 1, 3])).toStrictEqual(undefined);

  expect(sumZero2([1, 2, 3])).toStrictEqual(undefined);

  expect(sumZero2([-4, -2, -1, 0, 3, 6, 7])).toBe(undefined);
});
