// require => readline
const readline = require("readline");
//interface
const reader=readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$$"
});
console.clear();
// prompt
reader.prompt();
// => data => input
reader.on("line",function(data){

  console.log("Did you Just Said "+data);

  reader.prompt();
})

// cli => close 
reader.on("close",function(){
  console.log("Thank You for using our cli");
})
