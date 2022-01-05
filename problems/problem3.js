//calculate 2nd highest
let a = [19,5,20,29,30,67,39]

for(let i =0; i<=a.length; i++){
  for(let j =0; j < a.length; j++){
    if(a[j] > a[i]){
      let temp = a[i]
      a[i] = a[j]
      a[j] = temp 
    }
  }
}
const secondmax = a.splice(-2, 1)
console.log(a)
console.log(secondmax)


// let a = [4,5,8,7]


// let ssc = a.sort(function(a,b){
//         return a-b
//     })


//     console.log(ssc)
// ssc.splice(ssc.length-1, ssc.length-1)
// let r =ssc.pop()
// console.log(r)