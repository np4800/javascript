console.log("---OOPS---");

//Object literals

let student = {
  name: 'Nikhil',
  age: 35,
  desire: function() {
    console.log('To fuck lot of girls');
  }
}

console.log(student.name);
console.log(student.desire());

//contructor method
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.speed = givenSpeed;
  this.run = function() {
    console.log(`${this.name} is running with speed ${this.speed}`)
  }
}

car = new GeneralCar('Nissan',180);
console.log(car.run());

console.log('---OBJ PROTOTYPE---');

let obj = {
  name: 'Nikhil',
  age: 35
}

console.log(obj);

//Contructor
function Obj(givenName) {
  this.name = givenName
}

Obj.prototype.getName = function(){
  return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj('Juliana');
console.log(obj2);

// obj2.getName();
