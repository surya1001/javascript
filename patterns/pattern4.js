let str = ""
for(let i =1; i<= 5; i++){
  for(let j = 1; j<= i; j++){
    str += " "
  }
  for(let j=1; j <= 5; j++){
    if(i == j){
      str+= "#"
    }
  }
  for(let j=5;j >= i; j--){
    str+= " "
  }
  for(let j=5;j >= i; j--){
    if(j == i){
      str += "#"
    }else{
      str += " "
    }
  }
  str += "\n" 
}

for(let i =1; i<= 5; i++){
  for(let j=5;j >= i; j--){
    if(j == i){
      str += "#"
    }else{
      str += " "
    }
  }
  for(let j=1;j <= i; j++){
    str+= " "
  }
  for(let j=1;j <= i+1; j++){
    str+= " "
  }
  for(let j=1; j <= 5; j++){
    if(i == j){
      str+= "#"
    }
  }
  str += "\n" 
}

console.log(str)