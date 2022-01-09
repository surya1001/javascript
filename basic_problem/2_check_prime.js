let num = 23
let isPrime = true

// check wherther prime
// if (num === 1) {
//   console.log("1 is niether prime nor composite")
// } else if (num > 1) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       isPrime = false
//       break;
//     }
//   }

//     if (isPrime) {
//       console.log("Number is prime")
//     } else {
//       console.log("Number is not prime")
//     }
// }
// else {
//   console.log("Number is less than 1")
// }

// check all prime

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
