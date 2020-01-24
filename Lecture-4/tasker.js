const readline = require("readline");
//interface
const chalk = require("chalk");
const figlet = require("figlet");
const print = console.log;

console.clear();
print(chalk.blue(figlet.textSync("Tasker")));
print(chalk.cyan("Type help to list All conmmands"));
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ">>"
});
// prompt
reader.prompt();
const storage = [];
reader.on("line", function(data) {
  const cmd = data.split(" ")[0];
  const dataArr = data.split(" ");
  dataArr.shift();
  var task = dataArr.join(" ");
  if (cmd == "help") {
    print(`Available Commands
        1. add task_name
        2.  ls(to list all commands)
        3. delete(enter task_id to delete)
        `);
  } else if (cmd == "add" && task.length > 0) {
    storage.push(task);
    print(chalk.green(task + " added"));
  } else if (cmd == "delete"&&task.length>0) {
    const id=task.split(" ")[0];
    console.log(id);
    // delete

    storage.splice(id-1,1);
    console.log(chalk.green("One task deleted"));
  } else if (cmd == "ls") {
    print(chalk.magenta("Tasks"));
    for (let i = 0; i < storage.length; i++) {
      print(chalk.green(`${i + 1}  ${storage[i]}`));
    }
  }
  else{
    console.log("Wrong Command");
  }
  reader.prompt();
});
