let number = 9
let a = [0, 1]
for(let i = 0; i< number; i++){
  sum = a[i] + a[i + 1]
  a.push(sum)
}
console.log(a)