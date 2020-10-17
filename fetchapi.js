console.log("FetchApi");

let myBtn = document.getElementById('fBtn');
let content = document.getElementById('cid');

function getData() {
  console.log("Started getData ");
  url = "https://api.github.com/users";
  fetch(url).then((response)=>{
    console.log("Inside the running fetch first then");
    return response.json();
  }).then((data)=>{
    console.log("Second fetch then");
    console.log(data);
  })
}

function postData(){
  url = "https://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"harry321, "salary":"1234", "age":"23" }'
  params = {
    method: 'post',
    hearders: {
      'Content-Type': 'application/json'
    },
    body: data
  }
  fetch(url,params).then((response)=>{
    return response.json();
  }).then((data)=>{
    console.log(data);
  })
}

console.log("Before calling getData ");
getData();
console.log("After calling getData ");

postData();
