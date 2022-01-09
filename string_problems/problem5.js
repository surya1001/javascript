let n = -12340
let inte = String(Math.abs(n))
let rev = ""

for(let i = 0; i < inte.length; i++){
  rev = inte[i]+ rev
}

if(n < 0){
  rev = rev * -1
}
console.log(parseInt(rev))