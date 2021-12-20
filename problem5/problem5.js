function pairSum(arr, target) {
  // your code here
  let hashMap = {},
      results = [],
      res=[]

        for (let i = 0; i < arr.length; i++){
            if (hashMap[arr[i]]){
                results.push(hashMap[arr[i]], arr[i])
            }else{
                hashMap[target - arr[i]] = arr[i];
            }
          }
          res.push(arr.indexOf(results[0]));
           res.push(arr.indexOf(results[1]));
          // res.push(arr.indexOf(result[0]))
          return res;
  // let res =[]
  // let result = [1,5,3]
  // res.push(result.indexOf(arr[1]))
  // return res

  
}
module.exports = pairSum;
// console.log(pairSum([1, 3, 5, 7], 12))
