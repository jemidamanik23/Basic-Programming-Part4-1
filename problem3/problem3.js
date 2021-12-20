function joinArrayRemoveDuplicate(arrayA, arrayB) {

  const res = new Set(arrayA.concat(arrayB));
  var res1 = Array.from(res);
  return res1
  // your code here
}
module.exports = joinArrayRemoveDuplicate;
// console.log(joinArrayRemoveDuplicate(["football", "basketball"],
// ["basketball", "football"]))
