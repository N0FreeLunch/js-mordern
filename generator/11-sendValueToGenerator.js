function * myGen() {
  const x = yield 1;
  const y = yield (x + 1);
  const z = yield (y + 2);
  return x + y + z;
}

const myItr = myGen();
console.log(myItr.next());
console.log(myItr.next(10));
console.log(myItr.next(20));
console.log(myItr.next(30));
