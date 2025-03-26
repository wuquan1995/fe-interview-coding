function DeepCopy(obj) {}

const obj = { a: 1, b: { c: 2 }, d: [1, 4, 3] };
console.log("testOBj", DeepCopy(obj));
