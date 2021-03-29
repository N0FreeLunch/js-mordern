function* myGen() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const myItr = myGen();

console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
console.log(myItr.next());
