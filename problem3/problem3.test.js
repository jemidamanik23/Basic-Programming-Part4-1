const joinArrayRemoveDuplicate = require("./problem3");

test("Test 1", () => {
  expect(
    joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"])
  ).toBe(["apel", "anggur", "lemon", "leci", "nanas"]);
});
test("Test 2", () => {
  expect(
    joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"])
  ).toBe(["samsung", "apple", "sony", "xiaomi"]);
});
test("Test 3", () => {
  expect(
    joinArrayRemoveDuplicate(
      ["football", "basketball"],
      ["basketball", "football"]
    )
  ).toBe(["football", "basketball"]);
});
