// library => promise
const services = require("./Lib/servicesPromise");
async function helper() {
  const dFile = await services.downloadPromise("g-drive/img.jpeg");
  console.log("Img Downloaded to " + dFile);
  const cFile = await services.compressPromise(dFile);
  console.log("Img compressed to " + cFile);
  const uFile = await services.uploadPromise(cFile);
  console.log("Img Uploaded to " + uFile);
}
helper();
