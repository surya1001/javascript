let str = ""
let n = 5

// for(let i = 0; i < 5; i++){
//   for(let j = 0; j <= i; j++){
//     str += String.fromCharCode(j+65)
//   }
//   str += "\n"
// }

// for(let i =0; i < 5; i++){
//   for(let j =0; j <= i; j++){
//     str += String.fromCharCode(i+65)
//   }
//   str += "\n"
// }

// let count = 0
// for(let i = 0; i < 5; i++){
//   for(let j = 0; j <= i; j++){
//     str += String.fromCharCode(count + 65)
//     count++
//   }
//   str += "\n"
// }


// for(let i = 0; i < 5; i++){
//   for(let j = 5; j > i; j--){
//     str += String.fromCharCode(i+65)
//   }
//   str += "\n"
// }

// for(let i = 0; i < 5;i++){
//   for(let j = 0; j < 5-i; j++){
//     str += String.fromCharCode(65+j)
//   }
//   str += "\n"
// }

// for(let i = 0; i < 5; i++){
//   for(let j = n-1; j > i-1; j--){
//     str += String.fromCharCode(j+65)
//   }
//   str += "\n"
// }

// n=5
// for(let i = 1; i <= n; i++){
//   for (let j = 5; j >= i+1; j--){
//     str += " "
//   }

//   for(let k = 0; k < 2 * i -1; k++) {
//     str += String.fromCharCode(k+65)
//   }

//   str += "\n"
// }

// for(let i = 0; i < 15; i++){
//   for(let j = 0; j < 15; j++){
//     str+="^"
//   }
//   str+="\n"
// }

// count = 0
// for(let i = 1; i <= n; i++){
//   for(let j = 0; j <= n - i; j++){
//     str += " "
//   }
//   for(let k = 0; k < 2 * i - 1; k++){
//     str += String.fromCharCode(count+65)
//     count++
//   }
//   str += "\n"
// }


// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= i; j++){
//     str += " "
//   }
//   for(let k = 0; k < 2 * (n - i + 1) -1; k++){
//     str += String.fromCharCode(k+65)
//   }
//   str += "\n"
// } 


// for(let i = 1; i <= n; i++){
//   for(let j = n; j > i; j--){
//     str += " "
//   }

//   for(let k = 0; k < 2 * i - 1; k++){
//     str += String.fromCharCode(k+65)
//   }
//   str += "\n"
// }

// for(let i = 1; i <= n; i++){
//   for(let j = 1; j <= i; j++){
//     str += " "
//   }
//   for(let l = 0; l < 2 * (n - i) - 1; l++){
//     str += String.fromCharCode(l+65)
//   }
//   str += "\n"
// }


for(let i = 1; i <= n; i++){
  for(let j = 1; j <= i; j++){
    str += " "
  }
  for(let k = 0; k < 2 * (n - i + 1) - 1; k++){
    str += String.fromCharCode(k+65)
  }
  str += "\n"
}
for(let i = 1; i <= n-1; i++){
  for(let j = 5; j> i; j--){
    str += " "
  }
  for(let k = 0; k < 2 * (i+1) - 1; k++){
    str += String.fromCharCode(k + 65)
  }
  str += "\n"
}





console.log(str)