// g => undefined, v=> 10
// sayHi
console.log("Line Number 1 " + variable);
var variable = 10;
console.log("Line Number 2 " + variable);
// // function statements
sayHi();
greeter();
function sayHi() {
  console.log("Hello All");
}
// function expression
var greeter = function() {
  console.log("I am a function expression");
};
