// primitive => number ,string ,boolean ,undefined,null

// non primitve => object(key:value)













// console.log(typeof "mjhvbsdjhvc");
// console.log(typeof 1.1);
// console.log(typeof true);
// console.log(typeof { name: "Jasbir" });
// console.log(typeof null);
// console.log(typeof [1, 2, 3, 4, 5]);
// null -> object
// ecmaScript=>
// console.log(
//   typeof function() {
//     console.log("I may be a object");
//   }
// );

// function
function sayHi() {
  //
  console.log("I could say Something");
}
// property
sayHi.myproperty = "i am a property of a fn ";
// method
sayHi.myfn = function() {
  console.log("I am a method of a fn");
};
sayHi();

sayHi.myfn();
console.log(sayHi.myproperty);

