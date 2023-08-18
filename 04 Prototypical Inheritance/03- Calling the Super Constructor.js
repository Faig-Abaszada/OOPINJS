// 03- Calling the Super Constructor

// We introduce a parameter to the shape.;
// Now every shape as a color
function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color); // Here we call the Shape function, and pass to it "this" witch will reference the object created when calling the Circle function, an instance of Circle, and the color paramter
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw circle");
};

const myCircle = new Circle(1, "blue");
console.log(myCircle); // Circle { color: 'blue', radius: 1 }


// MY RESEARCH AND SOLUTION || call() metodu nece ishleyir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj); // cats typically sleep between 12 and 16 hours


///////////////////////////////
function Shape(color) {
  this.color = color; // => "this = Circle"- this Cirlce olduguna gore : Cirlce.color = color - demish oluruq
}
Shape.prototype.duplicate = function () {
  console.log('duplicate');
}

function Circle(radius, color) {
  this.radius = radius;
  Shape.call(this, color); // => Shape icinde bax !
}


Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// Circle.prototype = Object.create(Object.prototype); -> default Objectin prototipini goturur

Circle.prototype.draw = function () {
  console.log('draw')
}

const s = new Shape('red');
const c = new Circle(1, 'blue');
console.log(s);
console.log(c);


// End of MY RESEARCH AND SOLUTION
