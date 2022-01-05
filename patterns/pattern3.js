let str = ""

// ---------------PATTERN 1
// for(let i = 1; i <= 5; i++){
//   for(j = 1; j<=i; j++){
//     str += " "
//   }
//   for(k=5; k>=i; k--){
//     str += "*"
//   }
//   str += "\n"
// }
// console.log(str)

// ----------------PATTERN 2
// for(let i = 1; i <= 5; i++){
//   for(let j = 5; j >= i; j--){
//     str += " "
//   }
//   for(let k = 1; k <= i; k++){
//     str += "*"
//   }
//   for(let l = 1; l <= i-1; l++){
//     str += "*"
//   }
//   str += "\n"
// }
// console.log(str)

// ------------------PATTERN 3
for(let i = 1; i<=5; i++){
  for(let j = 5; j >= i; j--){
    str += " "
  }
  for(let k = 1; k <= i; k++){
    str += "*"
  }
  for(let l = 1; l <= i-1; l++){
    str += "*"
  }
  str += "\n"
}

for(let i = 0; i<=5; i++){
  for(let j = 1; j <= i; j++){
    str += " "
  }
  for(let k = 5; k >= i; k--){
    str += "*"
  }
  for(let l = 5; l >= i+1; l--){
    str += "*"
  }
  str += "\n"
}

console.log(str)