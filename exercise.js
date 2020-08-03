console.log('---EXCERCISE---');

let secdiv = document.querySelector('#secdiv');
secdiv.addEventListener('click',function(e) {
  console.log(e);
  document.getElementById('secdiv').innerHTML = "<h2>Juliana is beutiful</h2>";
  console.log(document.head);
  localStorage.setItem('h2Tag',document.getElementById('secdiv').innerHTML);
});

secdiv.addEventListener('blur',function(e){
  console.log('blur');
});
