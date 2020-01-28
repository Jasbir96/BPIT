const randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

module.exports.downloadPromise = function(url) {
  // We are downloading the file here
  var path = "C:\\Downloads\\";
  var img = url.split("/").pop();
  var dImg = path + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(dImg);
    }, randomDelay);
  });

  // accepts url of image and callback which is called when downloading is done
};

module.exports.compressPromise = function(filePath) {
  var ext = filePath.split(".").pop();
  var path = filePath.split(".").shift();
  var cImg = path + "-resized." + ext;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(cImg);
    }, randomDelay);
  });
};

module.exports.uploadPromise = function(diskPath) {
  var uploadUrl = "http://pep/uploads";
  var img = diskPath.split("\\").pop();
  var uImg = uploadUrl + "/" + img;
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(uImg);
    }, randomDelay);
  });
};
