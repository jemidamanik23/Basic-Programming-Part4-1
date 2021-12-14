const pow = require("./problem2");

test("Test 1", () => {
  expect(pow(2, 3)).toBe(8);
});
test("Test 2", () => {
  expect(pow(7, 2)).toBe(49);
});
test("Test 3", () => {
  expect(pow(10, 5)).toBe(100000);
});
test("Test 4", () => {
  expect(pow(17, 6)).toBe(24137569);
});
test("Test 5", () => {
  expect(pow(5, 3)).toBe(125);
});
