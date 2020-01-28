
// synchronous code
console.log("Before code ");
// async code => 
setTimeout(function fn1() {
  console.log("I will run after 4 sec");
}, 4000);

setTimeout(function fn2(){
console.log("I will run after 2 sec")
},2000);

// synchronous code
console.log("After code");
