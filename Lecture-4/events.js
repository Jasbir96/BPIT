const events = require("events");
const eventEmitter = new events();
// server side
eventEmitter.on("login", function(email, password) {
  if (email == "abc@gmail.com" && password == 12345678) {
    console.log("User Verfied");
  } else{
    console.log("User not verfied");
  }
});
// email=> abc@admin.com
eventEmitter.on("login", function(email, password) {
  if (email == "abc@admin.com" && password == 1234) {
    console.log("Welcom Admin");
  }else{
    console.log("You are not admin");
  }
});
// client
eventEmitter.emit("login","abc@gmail.com" , 12345678);
console.log("`````````````````````");
eventEmitter.emit("login", "abc@admin.com" ,1234)
