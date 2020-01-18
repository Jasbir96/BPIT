// os module=>use
// var os = require("os");

// console.log(os.arch());
// console.log(os.cpus());
// input
// var input = process.argv.slice(2).join(" ");
// require => file System

var fs = require("fs");
// input
var folderName = process.argv[2];
// console.log(input);
// folder
// undefined
for (var i = 1; i <= 50; i++) {
  if (folderName+i == undefined) {
    console.log("Please enter folderName");
    return;
  }
  //duplicate folders
  if (fs.existsSync(folderName +i) == true) {
    console.log(folderName +i + "already exists");
    continue;
  }

  // mkdir
  fs.mkdirSync(folderName+i);
  // print
  console.log("Folder " + folderName+i + "has been created");
}
