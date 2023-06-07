const linearSearch = require("./linear_search.js");

test("with an array and value return the index at which the item is in the array if not return -1", () => {
  expect(linearSearch([1, 3, 1, 5, 3, 5, 2, 16], 2)).toBe(6);

  expect(linearSearch([1, 6, 3, 4, 5, 7, 8, 9], 2)).toBe(-1);

  expect(linearSearch([], 2)).toBe(-1);

  expect(linearSearch([1, 2, 1, 5, 3, 5, 2, 16], 2)).toBe(1);
});
