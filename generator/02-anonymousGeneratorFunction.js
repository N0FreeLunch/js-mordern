let generator = function* (one, two) {
  console.log("함수 블록");
  yield one + two;
};

let genObj = generator(10, 20);
console.log(genObj.next());
