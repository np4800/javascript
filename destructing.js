console.log('---DESTRUCTURING---');
let [a,b] = [34,444];
console.log(a,b);

[a, b, c, ...d] = [1,2,3,45,6,7,8,9,0];
console.log(a,b,c,d);

({a,b,c, ...d} = {a:30,b:20,c:40,d:60,e:90})
console.log(a,b,c,d);

const fruits = ['Apples','Bananas','Mangoes'];
[a,b,c] = fruits
console.log(a,b,c);

const laptop = {
  model: "HP Elitebook",
  age: "23 days",
  disk: "SSD",
  price: 1200,
  start: function() {console.log('Sold Out')}
}

const {model, age, disk, price, start} = laptop;
console.log(model,age,disk,price);
start(); // start should be declared first in the variable and then only you can call it - seems like a dunder method in python
