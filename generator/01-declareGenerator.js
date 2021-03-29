function* declareGenerator(one, two) {
  console.log("함수 블록");
  yield one + two;
};

console.log("generator type : ", typeof declareGenerator);

let genObj = declareGenerator(1, 2);
console.log("generator return type : ",typeof genObj);
