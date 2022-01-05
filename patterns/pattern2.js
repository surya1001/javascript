let str = "";
let string = ""
// for(let i = 0; i< 5; i++){
//   for(let j = 0; j< i; j++){
//     str += "#"
//   }
//   str += "\n"
// }

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}

for(let i = 1; i <= 5; i++){
  for(let j = 5; j>=i; j--){
    str += "#"
  }
  str += "\n"
}


console.log(str)
console.log(string)