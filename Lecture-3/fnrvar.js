function sayHi(whatToSay) {
  const ans = whatToSay();
  console.log(ans);
  return "some value from sayHi";
}

function fnasPara() {
  console.log("I am a function passed as parameter");
  return "Some value from fn";
}
const myVar = sayHi(fnasPara);
console.log(myVar);
