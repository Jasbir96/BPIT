#!/usr/bin/env node
var fs = require("fs");
// input
var folderName = process.argv[2];
if (typeof folderName == true) {
  console.log("Please enter folderName");
  return;
}
if (fs.existsSync(folderName) == true) {
  console.log(folderName + "already  exists");
  return;
}

// mkdir
fs.mkdirSync(folderName);
// print
console.log("Folder " + folderName + " has been created");
