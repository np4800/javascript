console.log('---ASYNCHRONOUS PROGRAMMING---');
setTimeout(() => {
  for (let index=0; index<200; index++) {
    const e = index;
    console.log("Index id: "+index);
  }


},100);

console.log('Done Pritinig')
