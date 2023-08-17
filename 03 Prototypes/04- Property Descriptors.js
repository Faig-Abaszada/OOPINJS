// 04- Property Descriptors

const person = { name: "Miguel" };
console.log(person);

// If we iterate over the members of this object we will not see its prototype methods defined in objectBase.

for (let key in person) console.log(key); // We will only see the key name.

// The reason is our properties have attributes attached to them. sometimes this attributes prevent a property from being enumerated.

const objectBase = Object.getPrototypeOf(person);
console.log(objectBase);

const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString"); // This will return an object called property descriptor
console.log(descriptor);
/*
{
  value: [Function: toString],
  writable: true,     ---> writable true this means we can override this method
  enumerable: false,  ---> enumerable is false, this is why we could not see it when iterating over the person object.
  configurable: true  ---> when set to true means we can delete this member
}
*/

// We can set this properties for our person object.
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false
})

person.name = 'Mosh'; // If we set writable to false we can not change the value.
console.log(Object.keys(person)); // This will return an empty array, because we set enumerable to false
delete person.name; // With configurable set to false we can not delete the name property

// By default this properties descriptors are set to true.




// MY SOLUTION

// Object.defineProperty(Shape.prototype, 'duplicate', {
//   writable: true,
//   enumerable: false,
//   configurable: true,
//   value: function() {
//     console.log("duplicate");
//   }
// });

function Shape() {
  console.log("this is a shape");
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};


function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = function () {
  console.log("draw circle");
};



Circle.prototype = Object.create(Shape.prototype);

const myCircle = new Circle(1);
myCircle.duplicate();


