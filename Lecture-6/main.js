
// to import something
// node main.js today Mumbai
const help = require("./cmds/help");
const today = require("./cmds/today");
const forecast = require("./cmds/forecast");
// cli arguments => parse
const minimist = require("minimist");
const input = process.argv.slice(2);
const parsedInput = minimist(input);
// console.log(parsedInput);
// mumbai
const location = parsedInput.l || parsedInput.location;
// today
const cmd = parsedInput["_"][0];
// console.log(cmd);
// console.log(location);

if (cmd == "today") {
  today(location);
} else if (cmd == "forecast") {
  forecast(location);
} else if ((cmd = "help")) {
  help();
} else if (cmd == "version") {
  version();
} else {
  console.log("Wrong Command");
}
