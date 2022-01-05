let start = 9
let end = 900

for(let i = start; i <= end; i++){
  let a = String(i).split("")
  let total = 0;
  a.map(e => {
    total += Math.pow(e, a.length)
  })
  if(total == i){
    console.log("fibonacci : ", i)
  }
}
