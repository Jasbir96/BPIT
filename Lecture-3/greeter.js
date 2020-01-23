function getLastName(fullName) {
  return fullName.split(" ")[1];
}
function getFirstName(fullName) {
  return fullName.split(" ")[0];
}
function greeter(fullName, cb) {
  const greet = cb(fullName);
  console.log("Hi " + greet);
}

greeter("Steve Rogers", getLastName);

greeter("Steve Rogers", getFirstName);
