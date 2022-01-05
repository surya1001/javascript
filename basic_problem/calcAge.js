function calcAge(year) {
  let date = new Date();
  let currentyear = date.getFullYear();
  let age = currentyear - year;
  console.log(age);
  return age;
}

calcAge(1997);
calcAge(1976);

//state of Ming --> breathing, phsiology, self talk
