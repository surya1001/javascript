let number = String(156)
let a = number.split('')
let total = 0

a.map(ele => {
  total += Math.pow(ele, 3)
})

if(number == total){
  console.log("fibonacci")
}else{
  console.log("Not fibonacci")
}