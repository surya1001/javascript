a = [0,10,20,13,2,35,29,2,10]

for(let i = 0; i< a.length; i++){
  for(let j=i+1; j < a.length; j++){
    if(a[i] > a[j]){
      let temp = 0
      temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }
  }
}

console.log(a)

