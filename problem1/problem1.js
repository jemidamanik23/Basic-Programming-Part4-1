//using linear time

function primeNumber(number) {
  let isPrime = true;
  if (number === 1) {
    isPrime = false;    
  }
  else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
return isPrime
  
}
module.exports = primeNumber;
// console.log(primeNumber(10000000019))
