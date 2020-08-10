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

console.log('---PROTOTYPE INHERITENCE---');

const proto = {
  slogan: function() {
    return "This is good company"
  },
  changeName: function(newName){
    this.name = newName
  }
}

const harry = Object.create(proto);
harry.name = "Harry";
harry.role = "Tutor";

console.log(harry);

console.log('---ANOTHER SYNTAX---')
const harry1 = Object.create(proto, {
  name: { value: 'Harry', writable: true },
  role: { value: 'Programmer'}
});

console.log(harry1);
harry1.changeName = "Harry Potter";
console.log(harry1);

console.log('---INHERITENCE---');

function Employee(name,salary,experience) {
  this.name = name;
  this.salary = salary;
  this.experience = experience
}

//slogan
Employee.prototype.slogan = function() {
  return `Fuck me! ${this.name}`;
}

let ema = new Employee('Ema',44000,5);
console.log(ema.slogan());

function Programmer(name,salary,experience,language) {
  Employee.call(this,name,salary,experience);
  this.language = language;
}

//Manually you have to inherit the Protototype of base calls
Programmer.prototype = Object.create(Employee.prototype);

//Manually setting up the constructor of employee to programmer class
Programmer.prototype.constructor = Programmer;


let juls = new Programmer('Juliana',33000,3,'German');
console.log(juls);
