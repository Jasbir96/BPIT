//google
var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;
module.exports.downloadFile = function(url, cb) {
  // We are downloading the file here
  var path = "C:\\Downloads\\";
  console.log("Downloading file from: " + url);
  var img = url.split("/").pop();
  var dImg = url + "//" + img;
  setTimeout(function() {
    cb(dImg);
  }, randomDelay);

  // accepts url of image and callback which is called when downloading is done
};
//zip.lib
// We are compressing: C:\Downloads\logo.png
// File compressed to: C:\Downloads\logo-resized.png
module.exports.compressFile = function(filePath, cb) {
  console.log("We are compressing: " + filePath);
  var ext = filePath.split(".").pop();
  var path = filePath.split(".").shift();
  var cImg = path + "-resized." + ext;
  setTimeout(function() {
    cb(cImg);
  }, randomDelay);

  // let's assume it takes 2 seconds to compress
  //accepts  image filepath and callback which is called when compressesion is done
};
module.exports.uploadFile = function(diskPath, cb) {
  var uploadUrl = "http://pep/uploads";
  console.log("Uploading to: " + uploadUrl);
  var img = diskPath.split("\\").pop();
  var uImg = uploadUrl + "/" + img;
  setTimeout(function() {
    cb(uImg);
  }, randomDelay);

  // We will upload this file, it takes 3 seconds,
  // let's assume it takes 3 seconds to upload
  //accepts  image filepath and callback which is called when uploading is done
};


