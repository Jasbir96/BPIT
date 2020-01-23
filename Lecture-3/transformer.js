const arr = [1, 2, 3, 4, 5, 6];
function doubleIt(x) {
  return 2 * x;
}
function squarer(x) {
  return x * x;
}
//polyfill
function transformer(arr, cb) {
  const narr = [];
  for (var i = 0; i < arr.length; i++) {
    let dValue = cb(arr[i]);
    narr.push(dValue);
  }
  return narr;
}

var dArr = transformer(arr, doubleIt);
var sArr = transformer(arr, squarer);




console.log(arr);
console.log("```````````````````````````");
console.log(sArr);
