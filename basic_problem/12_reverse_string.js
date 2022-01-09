let str = "suryaprakash"

//method 1 -->
// let a = string.split("").reverse().join("")
// console.log(a)

//methods 2 --> 
rev = ""
for(i = str.length-1; i >= 0; i--){
  rev += str[i]
}
console.log(rev)