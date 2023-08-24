function Shape(color) {
  this.color = color; // => "this = Circle"- this Cirlce olduguna gore : Cirlce.color = color - demish oluruq
}
Shape.prototype.duplicate = function () {
  console.log('duplicate of Shape', this.color, this.radius)
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color); // => Shape icinde bax !
}

extend(Circle, Shape);

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Circle.prototype = Object.create(Object.prototype); -> Eger hec bir inheritance qurmasaq default budur eslinde ObjectBase-in prototipini goturur


// Extend etdikden sonra Circle-i prototipine method teyin etdik
Circle.prototype.draw = function () {
  console.log('draw')
}
// Burada method override oyrenirem
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log('duplicate of cirlce')
}

const s = new Shape('red');
const c = new Circle(77, 'blue');
console.log(s);
console.log(c);
console.log(c.duplicate())
