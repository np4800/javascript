console.log("---EVENTS IN JS---");
document.getElementById('heading').addEventListener(
  'click', function(e) {
    console.log('You have clicked an event');
    let variable;
    console.log(e);
  }
);

console.log("---MORE ON EVENTS---");
let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
function func1(e) {
  console.log('Clicked One',e);
  e.preventDefault();
}

btn.addEventListener('dbclick',function(e){
  console.log('Double Clicked',e.target);
});

let c = document.querySelector('.this');
c.addEventListener('mouseenter',function(){
  console.log('Mouse Entered ');
});

c.addEventListener('mouseleave',function() {
  console.log('Mouse Left ');
});


let d = document.querySelector('.container');
d.addEventListener('mousemove',function(e){
  console.log(e.offsetX,e.offsetY);
  document.body.style.backgroudColor = 'red' //`rgb(${e.offsetX},${e.offsetX},${e.offsetX})`;
  console.log('Trigerred Mouse Event');
});
