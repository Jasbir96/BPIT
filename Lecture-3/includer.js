// Q4 Write includer function that accepts isOdd  function and filter even values from actual array without mutating actual array
const arr = [5, 8, 14, 17, 23, 6, 8];
function isOdd(x) {
  return x % 2 == 1;
}

// polyfill
function includer(arr, isOdd) {
  const narr = [];
  for (let i = 0; i < arr.length; i++) {
    if (isOdd(arr[i])) {
      narr.push(arr[i]);
    }
  }
  return narr;
}
const oArr=includer(arr, isOdd);
console.log(oArr);
console.log("````````````````````````````````");
console.log(arr);
