console.log('---MAP---');
const myMap = new Map();
console.log(myMap);

let key1 = 'myStr', key2={}, key3=function(){};

myMap.set(key1, "This is a string");
myMap.set(key2, "Empty Object");
myMap.set(key3, "Emptry funcion");

let value1 = myMap.get(key1);
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
console.log(myMap.size);

// Different For loops
for (let [key, value] of myMap) {
  console.log(key, value);
}
for (let key of myMap.keys()){
  console.log('key is ', key);
}

for (let value of myMap.values()){
  console.log('Values is ', value);
}

myMap.forEach((value, key) => {
  console.log(key);
  console.log(value);
});

let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

let mykeysArray = Array.from(myMap.keys());
console.log(mykeysArray);

let myValuesArray = Array.from(myMap.values());
console.log(myValuesArray);
