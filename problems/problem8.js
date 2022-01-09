//peak element --> neighbour element is smaller

// let arr = [5, 3, 9, 4, 10, 6]
// // let arr = [2,3,4,5,6,7,8,9,10]

// for(let i = 0; i < arr.length; i++){
//   if(arr[i] >= arr[i-1] && arr[i] >= arr[i+1]){
//     console.log("PEak element at index",i)
//   }
// }


function catalan(n) {

  // Base case
  if (n <= 1)
    return 1;

  // catalan(n) is sum of 
  // catalan(i)*catalan(n-i-1)
  let res = 0;
  for (let i = 0; i < n; i++)
    res += catalan(i) * catalan(n - i - 1);

  return res;
}

// Driver Code
for (let i = 0; i < 50; i++)
  console.log(catalan(i) + " ");