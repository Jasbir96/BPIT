var ajax = require("./Lib/filedownload");
//***************************************
// original order of frames
var files = ["file1", "file2", "file3"];

var storage = {};
function getFile(file) {
  ajax.fakeAjax(file, function(data) {
    console.log("Incoming File " + file + " " + data);
    arrangeInorder(file, data);
    // what do we do here?
  });
}
function arrangeInorder(file, data) {
  // save file in storage
  storage[file] = data;
  for (let i = 0; i < files.length; i++) {
    if (storage[files[i]]!=undefined) {
      if (storage[files[i]] == true) {
        continue;
      } else {
        console.log(files[i] + " " + storage[files[i]]);
        storage[files[i]] = true;
      }
    } else {
      return;
    }
  }

  // check it's order
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");
