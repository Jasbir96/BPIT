#! /usr/bin/env node
var fs = require("fs");
var path = require("path");
function traverseFileSystem(currentPath, prefix) {
  console.log(currentPath);
  var files = fs.readdirSync(currentPath);
  for (var i = 0; i < files.length; i++) {
    var absolute = path.join(currentPath, files[i]);
    var stats = fs.lstatSync(absolute);
    if (i == files.length - 1) {
      console.log(`${prefix}└── ${files[i]}`);
      if (stats.isDirectory()) {
        traverseFileSystem(absolute, `${prefix}   `);
      }
    } else {
      console.log(`${prefix}├── ${files[i]}`);
      if (stats.isDirectory()) {
        traverseFileSystem(absolute, `${prefix}│   `);
      }
    }
  }
}
traverseFileSystem(process.cwd(), "");
