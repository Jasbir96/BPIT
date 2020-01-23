const arr = [1, 2, 3, 4, 5];
function multiplier(x, y) {
  return x * y;
}
function adder(x, y) {
  return x + y;
}
const ans=arr.reduce(adder);
console.log(ans);
