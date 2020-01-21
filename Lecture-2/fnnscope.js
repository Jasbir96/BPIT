
function a() {
  function b() {
    console.log("Line Number 3 " + myVar);
  }
   myVar = 2;
  console.log("Line Number 7 " + myVar);
  b();
}
myVar = 1;
console.log("Line Number 10 " + myVar);
// a();
console.log("Line Number 13 "+myVar);
