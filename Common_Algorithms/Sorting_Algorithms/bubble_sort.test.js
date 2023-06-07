const bubbleSort = require("./bubble_sort.js");
const bubbleSwap2015 = require("./bubble_sort.js");
const bubbleSortOpt = require("./bubble_sort.js");

test("Bubble sort testing using naive methods", () => {
  expect(bubbleSort([5, 7, 12, 999, 56, 2, 65, 1, -35, 67])).toStrictEqual([
    -35, 1, 2, 5, 7, 12, 56, 65, 67, 999,
  ]);

  expect(bubbleSort([7, 6, 3, 5, 7, 2, 8, 98, 0])).toStrictEqual([
    0, 2, 3, 5, 6, 7, 7, 8, 98,
  ]);
});

test("Bubble sort testing using ES2015 swap method", () => {
  expect(bubbleSwap2015([5, 7, 12, 999, 56, 2, 65, 1, -35, 67])).toStrictEqual([
    -35, 1, 2, 5, 7, 12, 56, 65, 67, 999,
  ]);

  expect(bubbleSwap2015([7, 6, 3, 5, 7, 2, 8, 98, 0])).toStrictEqual([
    0, 2, 3, 5, 6, 7, 7, 8, 98,
  ]);
});

test("Bubble sort testing using ES2015 swap method optimized", () => {
  expect(bubbleSortOpt([5, 7, 12, 999, 56, 2, 65, 1, -35, 67])).toStrictEqual([
    -35, 1, 2, 5, 7, 12, 56, 65, 67, 999,
  ]);

  expect(bubbleSortOpt([7, 6, 3, 5, 7, 2, 8, 98, 0])).toStrictEqual([
    0, 2, 3, 5, 6, 7, 7, 8, 98,
  ]);
});
