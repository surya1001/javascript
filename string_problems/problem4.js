//pallindrome

let str = "abccba"

let sp = ""
let jp = ""

//  // method 1
// for (let i = 0; i < Math.ceil(str.length/2); i++){
//   sp += str[i]
// }
// for(let i = str.length - 1; i >= Math.ceil((str.length - 1)/2); i--){
//   jp += str[i]
// }
// if(sp == jp){
//   console.log("pallindrome")
// }else{
//   console.log("not pallindrome")
// }


// //method 2

// for(let i = 0; i< str.length; i++){
//   sp += str[i]
// }
// for(let j = str.length-1; j >= 0; j--){
//   jp += str[j]
// }
// if(sp == jp){
//   console.log("pallindrome")
// }else{
//   console.log("not pallindrome")
// }

// method 3
for (let i = 0; i < str.length/2; i++) {
  sp += str[i]
  jp += str[str.length - i - 1]
}
if (sp == jp) {
  console.log("pallindrome")
} else {
  console.log("not pallindrome")
}
