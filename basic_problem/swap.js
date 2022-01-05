function swap(a,b){
  let temp 
  temp = a
  a = b
  b = temp
  return {a,b}
}

function swap1(a,b){
  a = a + b
  b = a - b
  a = a - b
  return {a,b}
}
console.log(swap(13,15))
console.log(swap1(15,12))