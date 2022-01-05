//peak element --> neighbour element is smaller

let arr = [5, 3, 9, 4, 10, 6]
// let arr = [2,3,4,5,6,7,8,9,10]

for(let i = 0; i < arr.length; i++){
  if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]){
    console.log("PEak element at index",i)
  }
}