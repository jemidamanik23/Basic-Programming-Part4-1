const munculSekali = require("./problem4");

test("Test 1", () => {
  expect(munculSekali("1234123")).toBe([4]);
});
test("Test 2", () => {
  expect(munculSekali("76523752")).toBe([6, 3]);
});
test("Test 3", () => {
  expect(munculSekali("12345")).toBe([1, 2, 3, 4, 5]);
});
test("Test 4", () => {
  expect(munculSekali("1122334455")).toBe([]);
});
test("Test 5", () => {
  expect(munculSekali("0872504")).toBe([8, 7, 2, 5, 4]);
});
