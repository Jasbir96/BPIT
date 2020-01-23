const arr = [1, 2, 3, 4, 5, 6];
function doubleIt(x) {
  return 2 * x;
}
function squarer(x) {
  
  return x * x;
}



  const sArr=arr.map(squarer);
  const dArr=arr.map(doubleIt);



  console.log(sArr);
  console.log(dArr);