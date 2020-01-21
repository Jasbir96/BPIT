Que Write a  lookUpProfile function that takes name and a property  as arguments
The function should check if name is an actual contact's firstName and the given property  is a property of that contact. 
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return "No such contact"
If prop does not correspond to any valid properties of a contact found to match name then return "No such property"
//Setup
var contacts = [
    {
        "firstName": "Abhishekh",
        "lastName": "Kumar",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
INPUT:
console.log(lookUpProfile("Abhishekh", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Abhishekh", "address"));
		


