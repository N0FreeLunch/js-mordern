let gen = function*(param) {
  let one = param + 1;
  yield one;
  var two = 2;
  yield one + two;
};

let genObj1 = gen(10);

console.log(genObj1.next());
console.log(genObj1.next());

let genObj2 = gen(10);

console.log(genObj2.next(10));
console.log(genObj2.next(20));
