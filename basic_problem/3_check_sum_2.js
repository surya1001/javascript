let a = [34,25,9, 15, 66]

for(let i = 0; i < a.length; i++){
  for(let j = i+1; j < a.length; j++){
    if(a[i] > a[j]){
      let temp = 0;
      temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }
  }
}

const max = a.pop()
console.log(max)
console.log(a)

let tot = 0
for(let i = 0; i < a.length; i++){
  tot += a[i]
  for(let j = 0; j < a.length; j++){
    if(a[i] != a[j]){
      tot += a[j]
      console.log(a[i], a[j], tot)
      if(max == tot){
        console.log(max)
        return true
      }
    }
  }
  tot = 0
}