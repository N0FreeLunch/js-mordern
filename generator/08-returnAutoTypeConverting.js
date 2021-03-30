let gen1 = function*(value) {
  return value;
}

let gen2 = function*(value) {
  return ++value;
}

let genObj1 = gen1();
console.log(genObj1.next());

let genObj2 = gen2();
console.log(genObj2.next());
