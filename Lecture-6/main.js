// to import something
const help = require("./cmds/help");
const today = require("./cmds/today");

const input = process.argv.slice(2);
const location = input[1];
const cmd = input[0];

if (cmd == "today") {
  today(location);
} else if (cmd == "forecast") {
} else if ((cmd = "help")) {
  help();

} else if (cmd == "version") {
} else {
  console.log("Wrong Command");
}
