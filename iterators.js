console.log('---ITERATORS TUTORIAL---');

function fruitsIterator(values) {
  let nextIndex = 0;
  return {
    next: function() {
      if (nextIndex < values.length) {
        return {
          value: values[nextIndex++],
          done: false
        }
      } else {
        {
          return { done: true }
        }
      }
    }
  }
}

const myArray = ['Apples','Oranges','Grapes','Bhindi'];
console.log(myArray);
const fruits = fruitsIterator(myArray);

console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
