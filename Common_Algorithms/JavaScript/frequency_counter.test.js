const same = require("./frequency_counter.js");

test("O(n^2) version of algorithm checking two arrays", () => {
  expect(same([2, 4, 5, 6], [16, 25, 36, 4])).toBe(true);
});
