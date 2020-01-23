const arr=[1,2,3,4,5];

function multiplier(x,y){
  return x*y;
}
function adder(x, y) {
  return x + y;
}

function composer(arr,cb){
let total=arr[0];
for(let i=1;i<arr.length;i++){
  total=cb(total,arr[i]);
}
return total;
}
const sum=composer(arr,adder);
const product=composer(arr,multiplier);console.log(sum);
console.log(product);