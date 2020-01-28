var ajax = require("./Lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];

function getFile(file) {
  ajax.fakeAjax(file, function(data) {
// what do we do here?
console.log("Incoming File "+file+" "+data);
  });
}
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");


