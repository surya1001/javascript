//sort array using rest parameter

let a = [5,3,7,2,9]

function sort(...args){
  console.log(args)
  for(let i =0; i<args.length;i++){
    for(let j = 0; j < args.length; j++){
      if(args[j] > args[i]){
        let temp = args[i]
        args[i] = args[j]
        args[j] = temp
      }
    }
  }
  console.log(args)
}

sort(5,3,7,2,9)