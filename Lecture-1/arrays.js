var myarr = [
  1,
  1.1,
  true,
  null,
  undefined,
  [1, 2, 3, 4, 5],
  function fninArr() {
    return "I am fn inside array";
  }
];

myarr["some index"]=41;
myarr["1075"]=354;
myarr[1074]=10;
// console.log(myarr.length);
// for (var key in myarr) {
//   console.log(key + " :  " + myarr[key]);
// }
// myarr[1075]="something";
// console.log(myarr);

// arr.push,pop

// myarr.push("last Value");
// console.log(myarr);
// console.log("````````````````````````````````");
// var poppedValue = myarr.pop();
// console.log(poppedValue);

// shift=> removeFirst,unshift=> addfirst

// console.log(myarr);
// // var slicedArray=myarr.slice(2,5);
// var splicedArray=myarr.splice(4,2);
// console.log("``````````````````");
// console.log(splicedArray);
// console.log("``````````````````````");
// console.log(myarr);
// true/false

// var isInsideArr=myarr.includes(null);
// console.log(isInsideArr);
// // -1/idx
// var isIdxArr=myarr.indexOf(null);
// console.log(isIdxArr);
