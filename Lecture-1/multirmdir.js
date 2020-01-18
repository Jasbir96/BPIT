var fs = require("fs");
// input
var folderName = process.argv[2];
// console.log(input);
// folder
// undefined

for (var i = 1; i <= 50; i++) {
  if (typeof (folderName+i) == "number") {
    console.log("Please enter folderName");
    return;
  }
  //duplicate folders
  if (fs.existsSync(folderName +i) == false) {
    console.log(folderName +i + "does not  exists");
    continue;
  }

  // mkdir
  fs.rmdirSync(folderName+i);
  // print
  console.log("Folder " + folderName+i + " has been deleted");
}