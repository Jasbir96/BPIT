// // function statements
function sayHi() {
  console.log("Hello All");
}

sayHi();


// function expression
var greeter = function() {
  console.log("I am a function expression");
};

greeter();

// IIFEE=> immediately invoked function expression
(function init() {
  console.log("Chess Board Has been created");
})();
