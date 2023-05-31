const same = require("./frequency_counter.js");
const same2 = require("./frequency_counter.js");

test("O(n^2) version of algorithm checking two arrays", () => {
  //expected values to come out true
  expect(same([2, 4, 5, 6], [16, 25, 36, 4])).toBe(true);

  //wrong values to come out false
  expect(same([3, 2, 1, 1], [6, 4, 1, 1])).toBe(false);

  //unequal array lengths to come out false
  expect(same([3, 2, 1, 1], [6, 4, 1])).toBe(false);

  //content errors to come out false
  expect(same([5, 6, 2, 1], [1, "four", 36, 25])).toBe(false);
});

test("O(3n) version of algorithm checking two arrays", () => {
  //expected values to come out true
  expect(same2([2, 4, 5, 6], [16, 25, 36, 4])).toBe(true);

  //unequal array lengths to come out false
  expect(same([3, 2, 1, 1], [6, 4, 1])).toBe(false);

  //content errors to come out false
  expect(same([5, 6, 2, 1], [1, "four", 36, 25])).toBe(false);
});
