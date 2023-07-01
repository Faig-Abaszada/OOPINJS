// 06- Functions are Objects

/*
In JavaScript functions are objects
*/

function Circle(radius) { // Bu bir objectdir !
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw');
    }
}
// Circle. === Circle(noqte) etdikde teklif edilen property ve metodlari gore bilersiz subut olaraq.

console.log(Circle.name); // This property returns the name of the function.

console.log(Circle.length); // This property returns the number of arguments.

// # Onceki dersde dedikki her objection contructor property-si vardir. Ve bu constructor bu objecti yaradan FUNKSIYAYA referans edir.
// # Burada maraqli bir meqam var, bu objecti kimin yaratdigini dushunursen ? :)
// ------------------------------------
// #WAY 1
console.log(Circle.constructor); //=> ƒ Function() { [native code] }

// This is the same as :

// #WAY 2
const circle = new Circle(1)
console.log(circle.constructor.constructor) //=> ƒ Function() { [native code] }

// circle.constructor === ƒ Circle(radius) { ... }
// circle.constructor.constructor === ƒ Function() { [native code] }
// ------------------------------------



// This returns the 'Function()' constructor that was used
// when we create a literal function. JavaScript uses
// that constructor to crete this object.
// Like this:
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function draw() {
    console.log('Draw')
}
`);

Circle.call({}, 1) // With the "call()" method we can call a function, as the first argument we pass an empty object, and then the following arguments explicitly
Circle.apply({}, [1, 2]) // With the "apply()" method, it works the same way as the call but we pass the arguments as an array.

// Using the call or apply method is the same as the following code:
// const circle = new Circle(1)
// console.log(circle);
