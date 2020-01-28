// lib
// require
const service = require("./Lib/services");
// function server
function downloaded(imgPath) {
  console.log("Img Downloaded to " + imgPath);
  service.compressFile(imgPath, compressed);
}
function compressed(cImg) {
  console.log("Compressed Img path" + cImg);

}
service.downloadFile("g-drive/img.jpeg", downloaded);

