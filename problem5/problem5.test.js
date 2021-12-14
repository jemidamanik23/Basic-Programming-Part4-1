const pairSum = require("./problem5");

test("Test 1", () => {
  expect(pairSum([1, 2, 3, 4, 6], 6)).toBe([1, 3]);
});
test("Test 2", () => {
  expect(pairSum([2, 5, 9, 11], 11)).toBe([0, 2]);
});
test("Test 3", () => {
  expect(pairSum([1, 3, 5, 7], 12)).toBe([2, 3]);
});
test("Test 4", () => {
  expect(pairSum([1, 4, 6, 8], 10)).toBe([1, 2]);
});
test("Test 5", () => {
  expect(pairSum([1, 5, 6, 7], 6)).toBe([0, 1]);
});
