//frequecy of integer x
let arr = [1,1,2,2,2,2,5,2,6, 6]
let x = 1

let count = 0
for(let i = 1; i<= arr.length; i++){
  if(arr[i] == x){
    count++
  }
}
console.log(count)

// function frequencyofInteger(arr){
//   //let n = arr.length
//   let countInt = ""
//   for (let i = 0; i < arr.length; i++) {
//           let count = 1
//           while(i< arr.length && arr[i]== arr[i+1]){
//               count++
//               i++
//           }
//           countInt += count 
//       }
      
//       return countInt
//   }
  

//  console.log(frequencyofInteger(arr))