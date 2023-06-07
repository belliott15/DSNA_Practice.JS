const selectionSort = require("./selection_sort.js");

test("given a random array sort the array using the selection sort method", () => {
  expect(selectionSort([34, 22, 10, 19, 17])).toStrictEqual([
    10, 17, 19, 22, 34,
  ]);

  expect(selectionSort([34, 22, 10, 19, 17])).toStrictEqual([
    10, 17, 19, 22, 34,
  ]);

  expect(selectionSort([0, 3, 6, 3, 78, 23, 2, 7, 19])).toStrictEqual([
    0, 2, 3, 3, 6, 7, 19, 23, 78,
  ]);
});
