const validAnagram = require("./anagram.js");

test("Function with two parameters to determine if they are anagrams of eachother", () => {
  //valid anagram should return true
  expect(validAnagram("racecar", "carrace")).toBe(true);

  //missing letters should return false
  expect(validAnagram("aweso", "awesome")).toBe(false);

  //empty string should return false
  expect(validAnagram("", "")).toBe(true);

  //varying numbers should be true
  expect(validAnagram(123, 321)).toBe(true);

  //fun test
  expect(
    validAnagram("laksdjflkjgkl;jalksdjfkj;", ";jalkjkjgksdjfk;laksdjfll")
  ).toBe(true);

  expect(validAnagram("whose", "whoses")).toBe(false);
});
