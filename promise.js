// Promise: Something that i intend to fulfil for you
// If I fail: I will send you "reject" and you have to catch the reason/errormsg
// If I solve: I will send you resolution note (resolve) and you can use "then" to take further actions


// console.log('--- PROMISE ---');
// function func1 () {
//   return new Promise(function (resolve,reject){
//     setTimeout(() => {
//       const error = true;
//       if (!error) {
//         console.log("Your Promis has been served");
//         resolve();
//       } else {
//         console.log("Your Promise has not be served")
//         reject("Sorry cunt not fulfiled");
//       }
//     },2000);
//   })
// }
//
// func1().then(function(){
//   console.log("ahhhhhhhhhhhhhhh !")
// }).catch(function(error){
//   console.log(" Get Lost " +error);
// })


const students = [
  {name: "harry", subject: "Javascript"},
  {name: "nikhil", subject: "c++"}
]

function enrollStudent(student) {
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      students.push(student);
      console.log('Student has been enrolled');
      const error=false
      if (!error) {
        resolve();
      } else {
        reject();
      }
    },1000);
  });
}

function getStudent (){
  setTimeout(function() {
    let str = "";
    students.forEach(function(student) {
      console.log(student.name + ' likes ' +student.subject);
    });
  },4000);
}

let newStudent = {name: "Juliana", subject: "dhandha"}
enrollStudent(newStudent).then(getStudent).catch(function(){
  console.log("Some Error Occured")
})
