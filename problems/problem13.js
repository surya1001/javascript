//common element in all hree array
let a1 = [1,3,5,8,2]
let a2 = [2,4,6,8]
let a3 = [2,3,1,5,8]

for(let i = 0; i < a1.length; i++){
  for(let j = 0; j < a2.length; j++){
    for(let k = 0; k < a3.length; k++){
      if(a1[i] == a2[j] && a2[j] == a3[k]){
        console.log(a1[i])
      }
    }
  }
}