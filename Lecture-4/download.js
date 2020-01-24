// lib
// require
const service = require("./Lib/services");
console.log("Request has been send");

// function server
service.downloadFile("g-drive/img.jpeg", downloaded);
// service.compressFile(imgPath);
// service.uploadFile(cImgpath);
function downloaded(imgPath) {
  console.log("Img Downloaded to " + imgPath);
}
service.co

// console.log("Waiting for response");
