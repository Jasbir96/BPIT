const print=console.log;
const chalk=require("chalk");
const figlet =require("figlet");
print(chalk.green("I am green text"))
print(chalk.blue("I am blue text"))
print(chalk.cyan("I am cyan text"))
print(chalk.red("I am red text"))
print(chalk.blue(figlet.textSync("Large Blue Text")));