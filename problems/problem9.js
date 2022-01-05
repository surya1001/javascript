// Given an array arr[] and an integer K where K is smaller than size of array, 
// the task is to find the Kth smallest element in the given array. 
//  It is given that all array elements are distinct

let arr = [10,24,32,18,90, 45]
let k = 4

//here as k = 3 therefore 3rd smallest element from array
for(let i = 0; i < arr.length; i++){
  for(let j = i; j < arr.length; j++){
    if(arr[i] > arr[j]){
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}

console.log(arr[k])
console.log(arr)
