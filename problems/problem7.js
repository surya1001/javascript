//min and max of array
let a = [4,5,2,7,9,3,1]
for(let i = 0; i < a.length; i++) {
  for(let j = i; j < a.length; j++) {
    if(a[i] > a[j]){
      let temp = a[i]
      a[i] = a[j]
      a[j] = temp
    }
  }
}

let min = a[0]
let max = a[a.length-1]

console.log(`min: ${min}, max: ${max}`)



// function subArraySum(arr, sum) {
//       let current = 0;
//       for (let i = 0; i < arr.length; i++) {
//           current = arr[i];
  
//           // try all subarrays starting with 'i'
//           for (let j = i + 1; j <= arr.length; j++) {
//               console.log(i,j)
//               if (current == sum) {
//                   console.log("Sum found between indexes " + i + " and " + (j - 1));
//                   return;
//               }
//               if (current > sum )
//                   break;
//               current = current + arr[j];
//               console.log("=============",current)
//           }
//       }
  
//      console.log("No subarray found");
//       return;
//   }
  
//   let arr = [15, 2, 4, 8, 9, 5, 10, 23];
//   let sum = 32
//   subArraySum(arr,sum);