const arr = [5, 8, 14, 17, 23, 6, 8];
function isOdd(x) {
  return x % 2 == 1;
}

const oArr=arr.filter(isOdd);
console.log(oArr);
console.log("````````````````````````````````");
console.log(arr);
