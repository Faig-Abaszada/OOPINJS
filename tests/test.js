function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = function () {
  console.log('draw');
}
Circle.prototype.toString = function () {
  console.log('Our radius is: ', this.radius)
}

const c1 = new Circle(1);
const c2 = new Circle(2);

// console.log(c1);
// console.log(c2)
// console.log(c1.toString())
// console.log(Object.keys(c1))
// for (let key in c1) {
//   console.log(key);
// }
console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('testPropNAme'));
