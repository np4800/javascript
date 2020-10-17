console.log("---TRY CATCH TUTORIAL ---");

let a = "Hello Harry";
a = undefined;
if ( a != undefined ){
  throw new Error("It is not undefined!")
} else {
  console.log("It is undefined ");
}

try {
  // functionCall();
  console.log("Try: Hello I am in try now !");
} catch(error) {
  console.log("Catch: You have been caught!");
} finally {
  console.log("Finally: Executes everytime you run - can be used to flush the memory ! ");
}

console.log("End of the code OR footnote ");
