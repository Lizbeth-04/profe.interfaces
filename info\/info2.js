'use strict'

let userData = new Map();

let john = { name: "John" };
let jane = { name: "Jane" };
let bob = { name: "Bob" };


userData.set(john, 30);
userData.set(jane, 25);
userData.set(bob, 40);


alert(userData.get(john)); 
alert(userData.get(jane)); 
alert(userData.get(bob));  


alert(userData.has(jane)); 
alert(userData.has({ name: "Jane" })); 


alert(userData.size);


for (let user of userData.keys()) {
  alert(user.name);
}

for (let age of userData.values()) {
  alert(age); 
}


for (let entry of userData) {
  alert(entry[0].name, entry[1]); 
}


let uniqueVisitors = new Set();

let alice = { name: "Alice" };
let charlie = { name: "Charlie" };
let johnAgain = { name: "John" }; 


uniqueVisitors.add(alice);
uniqueVisitors.add(charlie);
uniqueVisitors.add(johnAgain);
uniqueVisitors.add(alice); 


alert(uniqueVisitors.size); 


alert(uniqueVisitors.has(charlie)); 
alert(uniqueVisitors.has({ name: "John" }));


for (let visitor of uniqueVisitors) {
  alert(visitor.name); 
}
