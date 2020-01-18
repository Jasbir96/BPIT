// console.log();
var print = console.log;
print("Hello BPIT");
//primitive Types=>undefined,boolean,String,null,Number
// default=> undefined
// var variable;
// // types=> Number
// variable = 1;
// variable = 1.1;
// // type=> boolean
// variable = true;
// //null
// variable = null;
// // string
// variable = "sfmjygdfjg";
// print(variable);
// variable = "jmvhdzbfv";

// for (var i = 1; i <= 10; i++) {
//   console.log("Number is " + i);
// }

// function ,arrays,objects
// function definition=> 
function Greeter(whatToSay){
  console.log("Hi "+ whatToSay);

}
// call
// Greeter("All");
// Arrays=> collection of anything

var myarr=[
  1,
  1.1,
  true,
  null ,
  undefined,
  [1,2,3,4,5],
  function fninArr(){
    return "I am fn inside array";
  }
]

// print(myarr[5][3]);
// print(myarr[6]());
myarr[95]="some value";
print(myarr);

