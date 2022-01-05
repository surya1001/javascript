function pt(num){
  let str = ""
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      str += "#"
    }
    str += "\n"
  }
  console.log(str)
}

pt(7)