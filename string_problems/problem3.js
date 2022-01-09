let str = "suryaprakash"

let result = {}
for(let i = 0; i < str.length; i++){
  var char = str[i]
  if(result[char] > 0){
    result[char]++
  }else{
    result[char] = 1
  }
}
console.log(char, result[char])