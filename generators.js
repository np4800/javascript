console.log('---GENERATORS---');

function* numbersGen() {
  yield 1;
  yield 2;
  yield 3;
}

let getNum = numbersGen();
console.log(getNum.next());
console.log(getNum.next());
console.log(getNum.next());
console.log(getNum.next());
