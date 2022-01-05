let arr1 = [1, 2,23,45, 89, 3, 4, 8, 9, 10, 11, 12]
let arr2 = [5, 2, 3, 62, 88,99,89, 7, 8, 9, 10, 11, 12]
//union
// let arr1 = [13,5,8,1,4,9]
// let arr2 = [5, 2, 3, 6, 7, 8, 9, 10]

let union = [...arr1]
let arr3 = []
for(let i = 0; i <= arr2.length; i++){
    for(let j = 0; j <= arr2.length; j++){
        if(union[j] == arr2[j]){
            var idx = arr2.indexOf(arr2[j]);
            arr2.splice(idx, 1);
        }
    }
}
union = union.concat(arr2)

console.log(union)
