const search = require("./search_sort.js");
const search2 = require("./search_sort.js");

test("search through an array and find a given number and return its index", () => {
  expect(search([1, 2, 3, 4, 5, 6, 7, 8], 7)).toBe(6);

  expect(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 22)).toBe(-1);

  expect(search([3, 7, 4, 3, 6, 8, 4, 7, 4, 2], 3)).toBe(0);
});

test("search through an array and find a given number and return its index", () => {
  expect(search2([1, 2, 3, 4, 5, 6, 7, 8], 7)).toBe(6);

  expect(search2([1, 2, 3, 4, 5, 6, 7, 8, 9], 22)).toBe(-1);

  expect(search2([3, 7, 4, 3, 6, 8, 4, 7, 4, 2], 3)).toBe(0);
});
