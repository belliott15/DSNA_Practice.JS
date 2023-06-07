const naiveString = require("./naive_string_searching.js");

test("Given a long string and a short string, determine how many times the short string shows up in the long string", () => {
  expect(naiveString("wowzaomgiomg", "omg")).toBe(2);

  expect(naiveString("holy moly oly canoly", "oly")).toBe(4);

  expect(naiveString("holy moly oly canoly", "ma")).toBe(0);
});
