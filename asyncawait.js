console.log('1 ASYNC-AWAIT TUTORIAL');

async function harry() { //Async return a promise
  console.log("3 Inside Harry")
  const response = await fetch('https://api.github.com/users'); //3.1 - (gets executed) This returns a promise everytime it has been called and transfers the control back to the main function as it sees that there is an 'await' keyword
  console.log("6 Before Response");
  const users = await response.json(); // This will transfer the control again to the main calling function becuase of 'await' keyword
  console.log('7 Users resolved');
  return users; // The moment this return gets executed - it will resolve all the promises
}

console.log('2 Before Harry')
const a = harry();
console.log(a);
console.log("4 After Harry");
a.then(data => console.log(data)); // 8 - (Gets Executed) - This gets executed
console.log("5 After getting the data");
