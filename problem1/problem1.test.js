const primeNumber = require("./problem1");

test("Test 1", () => {
  expect(primeNumber(1000000007)).toBe(true);
});
test("Test 2", () => {
  expect(primeNumber(1500450271)).toBe(true);
});
test("Test 3", () => {
  expect(primeNumber(1000000000)).toBe(false);
});
test("Test 4", () => {
  expect(primeNumber(10000000019)).toBe(true);
});
test("Test 5", () => {
  expect(primeNumber(10000000033)).toBe(true);
});
