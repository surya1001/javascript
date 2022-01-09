//check factors of number
let num = 36
let factor = []

//check prime numbers
for (let i = 2; i <= num; i++) {
  let flag = 0
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1
      break
    }
  }

  if (i > 1 && flag == 0) {
    console.log(i)
  }
} 


//check factors
for (let i = 0; i < prime.length; i++) {
  if (num != 1) {
    for (let j = 0; j < prime.length; j++) {
      if (num % prime[j] == 0) {
        num = num / prime[j]
        factor.push(prime[j])
        break
      }
    }
  }
}
factor.push(1)
console.log(factor)
