const servicePromise = require("./Lib/servicesPromise");

async function helper() {
  // download
  const dImg = await servicePromise.downloadPromise(
    "http://g-drive.com/logo.png"
  );
  
  console.log(dImg);
  // compress
  const cImg = await servicePromise.compressPromise(dImg);
  console.log(cImg);

  // upload
  const uImg = await servicePromise.uploadPromise(cImg);
console.log(uImg);
}

helper();
