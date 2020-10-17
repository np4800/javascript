console.log("---SETS---");
let mySet = new Set(['this','that',45,'this',{a:10, b:30},'hello', 'world']);
console.log(mySet);

if (mySet.has('this')) {
  console.log('"this" is avaible in mySet');
}

for (let item of mySet) {
  console.log("Using simple 'for of loop' mechenism Item is: ", item);
}

mySet.forEach((item)=>{
  console.log('Using "forEach" mechenism items are: ', item);
});

console.log("Before Delete: ", mySet.size);
mySet.delete('world');
console.log(" After Delete: ", mySet.size);
