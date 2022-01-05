//count frequency of words in the string
function printR(str){
  let ss = ""
  let n = str.length
  for(let i = 0; i< n; i++){
    let count = 1;
    while (i < n-1 && str[i] == str[i+1]){
      count++;
      i++
    }
    var jj = str[i] + count
    ss += jj
  }
  console.log(ss)
}

let str = "hhwwwiiiwww"
printR(str)