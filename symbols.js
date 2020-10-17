console.log('---SYMBOLS---');
// Symbol will generate a new primitive datatype- it is used to create a unique value

const sym1 = Symbol('Identifier-1');
const sym2 = Symbol('Identifier-2');

const a = 'A';
const b = 'A';

console.log(sym1 === sym2);
console.log(a === b);

let myObj = {};
const k1 = Symbol();
const k2 = Symbol();

myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["string"] = "I am simple element"
myObj["number"] = "4"

console.log(myObj);
console.log(myObj[k1], myObj[k2]);
// console.log(myObj.k1); //Not allowed - this will return undefined


// For loop operation
for (key in myObj){
  console.log(key, myObj[key]); // Symbol will ignored in for loops so it will not print here anything
}


console.log(JSON.stringify(myObj));
