const events = require("events");
const eventEmitter = new events();

// server side=> 
eventEmitter.on("login", function(email, password) {
  if (email.includes("@")) {
    console.log("input email is valid");
  } else {
    console.log("input email is not valid");
  }
});

eventEmitter.on("login", function(email, password) {
  if (email == "abc@gmail.com" && password == 12345678) {
    console.log("User verfied");
  } else {
    console.log("Invalid Credentials");
  }
});


// client side 
eventEmitter.emit("login","abc@gmail.com",12345678);
eventEmitter.emit("login","abcd@gmail.com",12345675);
eventEmitter.emit("login","abc@gmail.com",123456);
eventEmitter.emit("login","abcgmail.com",12345675);