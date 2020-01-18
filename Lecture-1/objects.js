// object=> key:value pair

// JSON=> javascript object notation
// XML=> html 

var cap = {
  "firstName": "Steve",
  "lastName": "Rogers",
  friends: ["Bruce", "Tony", "Peter"],
  address: {
    state: "New York",
    city: "Manhatten"
  },
  age: 30,
  sayHi: function() {
    return "Cap Says Hi";
  },
  isAvenger: true,
  key:"some value"
};
// update/create
cap.age=20;
cap.movies=["Civil War","Winter Soldier","First Avenger"];
// delete 
delete cap.isAvenger;
console.log(cap);
// get
// console.log(cap.firstName);
// console.log(cap.address.city);
// console.log(cap.friends[1]);
// console.log(cap.isAvenger);
// console.log(cap.sayHi());
// var name = "age";
// variable value
// console.log(cap[name]);
// // literally
// console.log(cap.lastName);
// console.log(cap["lastName"]);
// square bracket operator 
// for (var key in cap) {
//   console.log(key + " :  " + cap[key]);
// }
// for (var key in cap) {
//   console.log(key + " :  " + cap.key);
// }

<firstName>Steve</firstName>