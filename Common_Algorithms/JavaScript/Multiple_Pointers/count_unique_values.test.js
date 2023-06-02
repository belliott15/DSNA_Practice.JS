const countUniqueValues = require("./count_unique_values.js");

test("counts the number of unique values in an array", () => {
  //sorted example to determine all unique values
  expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);

  //unsorted array
  expect(countUniqueValues([1, 2, 3, 4, 6, 2, 5, 3, 1, 1, 12, 32])).toBe(8);

  //empty array
  expect(countUniqueValues([])).toBe(0);

  expect(countUniqueValues([-2, -1, 0, 1, 4, 4, 7, 12, 12, 13])).toBe(8);
});
