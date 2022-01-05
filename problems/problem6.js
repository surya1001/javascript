//reverse a string

let str = "suryaprakash"
const a = str.split("")
let b = []
for(let i = a.length - 1; i >= 0; i--){
  b.push(a[i])
}
const rev = b.join("")

console.log(rev)