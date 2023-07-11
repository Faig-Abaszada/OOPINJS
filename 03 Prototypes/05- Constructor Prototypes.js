// 05- Constructor Prototypes

/*
The constructor property returns a reference to the Object constructor function that created the instance object.
Note that the value of this property is a reference to the function itself, not a string containing the function's name.

The value is only read-only for primitive values such as 1, true, and "test".
*/

/*
So you have learned that every object in JavaScript except the root object has a prototype or a parent. Now the proper way to
get the prototype of an object, is using Object.getPrototype
*/
let myObj = {};
Object.getPrototypeOf(myObj);  // obyektin prototipini almagin duzgun yolu budur.
// myObj.__proto__ (parent of myObj) , bu yuxaridaki ile eyni sheydir

let objectLiteral = {};
console.log(Object.getPrototypeOf(objectLiteral))
console.log(objectLiteral.constructor === Object); // true

let objectConstructor = new Object();
console.log(Object.getPrototypeOf(objectConstructor));
console.log(objectConstructor.constructor === Object); // true

let arrayLiteral = [];
console.log(arrayLiteral.constructor === Array); // true

let arrayConstructor = new Array();
console.log(arrayConstructor.constructor === Array); // true

let numberLiteral = 3;
console.log(numberLiteral.constructor === Number); // true

let numberConstructor = new Number(3);
console.log(numberConstructor.constructor === Number); // true


// As function in JavaScript are objects. A Constructor Function also have a prototype property

function Circle(radius) {
  this.radius = radius
}

console.log(Circle.prototype); // This is the Object that will be used as the parent for object created by the Circle constructor function. Lets call it the circleBase

const myCircle = new Circle(10);
console.log(Object.getPrototypeOf(myCircle)); // This returns the same object as Circle.prototype, the circleBase
console.log(myCircle.constructor); // This will return the circle constructor function
/*
ƒ Circle(radius) {
  this.radius = radius;
}
*/


