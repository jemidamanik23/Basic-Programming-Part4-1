function munculSekali(angka) {
  // your code here
  let result=[]
  for(i in angka){
  if(angka.split("").filter(v => v == angka[i]).length==1)
  result.push(Number(angka[i]))
  }
  
return result
}
module.exports = munculSekali;

// console.log(munculSekali("1234123442398"))
