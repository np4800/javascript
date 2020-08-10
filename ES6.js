console.log('---ES6 CLASSES---');

class Employee {
  constructor(givenName,givenExperience,givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan() {
    return `I am ${this.name} and i belong to ${this.division} have ${this.experience} exp.`;
  }

  joiningYear() {
    return 2020 - `${this.experience}`;
  }

  static add(a,b) {
    return a+b;
  }

}

class Programmer extends Employee {
  constructor(givenName,givenExperience,givenDivision,givenLanguage) {
      super(givenName,givenExperience,givenDivision);
      this.language = givenLanguage;
  }
  favLang() {
    if ( this.language == 'Go') {
      return "Go is Fav";
    }else {
      return "Python is Fav";
    }
  }
  static multiply() {
    return "I wanna fuck Juliana";
  }
}


harry = new Employee('Harry',60,"HR");
console.log(harry);
console.log(harry.slogan(),harry.joiningYear())
console.log(Employee.add(4,4));

console.log('---INHERITENCE---');
nikhil = new Programmer('Nikhil',30,"Boss","Go");
console.log(nikhil);
console.log('Nikhil says:',Programmer.multiply());
