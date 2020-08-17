console.log('---ASYNCHRONOUS PROGRAMMING---');
// setTimeout(() => {
//   for (let index=0; index<3; index++) {
//     const e = index;
//     console.log("Index id: "+index);
//   }
//
//
// },100);
console.log('Done Pritinig');
console.log("--- CALLBACK ---");

//Pretend that you are getting the below object in the form of response from a server
const students = [
  {name: "Juliana", subject: "Spying" },
  {name: "Nikhil",  subject: "Hacking" }
]

//Function to enrollStudent
function enrollStudent(student,callback){
  setTimeout(function(){
    students.push(student);
    console.log('Student Enrolled');
    callback();
  },2000);
  // callback();
}

function getStudent(){
  setTimeout(function(){
    let str = "";
    students.forEach(function(student){
      str += `<li>${student.name}</li>`;
    });
    document.getElementById('students').innerHTML = str;
    console.log('Students are fetched');
  },1000);
}

let newStudent = {name: "Carrie", subject: "Homeland"}
enrollStudent(newStudent,getStudent);
// getStudent();
