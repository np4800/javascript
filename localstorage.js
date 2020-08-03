console.log("---LOCALSTORAGE---");

localStorage.setItem('Name','Nikhil');
localStorage.setItem('Job','Software Engineer');

console.log(localStorage);
localStorage.clear();
console.log(localStorage.getItem('Name'));
//Cannot add the array in localStorage but it can be overcome using some method
//And that other method is using JSON.stringify method

let impArray = ['adrak','pyaz','dhania'];

localStorage.setItem('Sabzi',impArray);
console.log(localStorage); // This will show the array in one string format only.
localStorage.setItem('Sabzi',JSON.stringify(impArray)); //Local Storage converted into object Array from String.
console.log(localStorage);
console.log(JSON.parse(localStorage.getItem('Sabzi'))); //to show in the form of array object use this method. And you can use the object methods on thie objects

console.log("---SESSIONSTORAGE---");
let fruitItems = ['orange','pomogrenete','apple','mango'];
sessionStorage.setItem('fruits',fruitItems);
console.log(sessionStorage); //Storage shown in string format
sessionStorage.setItem('fruits',JSON.stringify(fruitItems)); //Storage converted in object Array from String
console.log(JSON.parse(sessionStorage.getItem('fruits')));

//**NOTE: When you kill the chrome session and open the same file again then localstorage will be persisting and session storage does not perisist.
