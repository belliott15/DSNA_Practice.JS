const binarySearch = require("./binary_search.js");

test("function that accepts an array and a value and if the value is in the array return index else return -1", () => {
  expect(
    binarySearch(
      [
        1, 4, 5, 6, 7, 8, 9, 10, 12, 16, 17, 22, 25, 26, 27, 27, 47, 48, 58, 59,
        72,
      ],
      10
    )
  ).toBe(7);
  expect(
    binarySearch(
      [
        1, 4, 5, 6, 7, 8, 9, 10, 12, 16, 17, 22, 25, 26, 27, 27, 47, 48, 58, 59,
        72,
      ],
      100
    )
  ).toBe(-1);

  expect(binarySearch([], 8)).toBe(-1);

  expect(
    binarySearch([3, 5, 7, 1, 7, 3, 7, 2, 17, 11, 34, 78, 62, 42, 15], 17)
  ).toBe(10);
});
