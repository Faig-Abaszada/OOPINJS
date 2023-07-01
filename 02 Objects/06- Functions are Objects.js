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
/*
Ne vaxtki biz costructor funskiyasi teyin edirik JS engine Objecti yaratmaq ucun
Circle.constructor altinda ƒ Function() { [native code] } funksiyasini istifade edecek!
*/
// Circle. === Circle(noqte) etdikde teklif edilen property ve metodlari gore bilersiz subut olaraq.

console.log(Circle.name); // This property returns the name of the function.

console.log(Circle.length); // This property returns the number of arguments.

// # Onceki dersde dedikki her objection contructor property-si vardir. Ve bu constructor bu objecti yaradan FUNKSIYAYA referans edir.
// # Burada maraqli bir meqam var, bu objecti kimin yaratdigini dushunursen ? :)
// ----------------------------------------------------------------------
// #WAY 1
console.log(Circle.constructor); //=> ƒ Function() { [native code] }

// This is the same as :

// #WAY 2
const circle = new Circle(1)
console.log(circle.constructor.constructor) //=> ƒ Function() { [native code] }

// circle.constructor === ƒ Circle(radius) { ... }
// circle.constructor.constructor === ƒ Function() { [native code] }
// -----------------------------------------------------------------------


// ---------------------------------------------------------
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
const circleFunctionWay = new Circle1(1);
// Yuxaridakialr asagidakilarla eynidir :
// function Circle(radius) { // Bu bir objectdir ! ve bunun constructorunda da yuxaridaki kimi bir funskiya yatir! ( Circle.constructor)
//   this.radius = radius;
//   this.draw = function draw() {
//     console.log('Draw');
//   }
// }
// const circleConstructorWay = new Circle(1);
// ---------------------------------------------------------

Circle.call({}, 1)
/*
Arguments as explicitly
With the "call()" method we can call a function,
as the first argument we pass an empty object, and then the following arguments explicitly.

- Bunlar eyni expressionlardir Circle.call({}, 1) <===> const a = new Circle(1);
  Ne vaxt ki biz new operatorunu istifade edirik daxili olaraq bosh object yaradir {}, ve birici argument olaraq call({})- metoduna oturur
  Və bu obyekt 'this' üçün konteksti müəyyən edir. Belelikle 'this' bu objecte istinad edəcək.
  Onceki dersde demisdik eger new operatorunu istifade etmesek new Circel() deyil sadece Circle() desek bu gedib
  window-a istinad edecek , yaniki bele tesevvur ede bilersiz Circle.call(window, 1)

*/

// Diger metod ise budur ,  call-dan ferqleri sadcee argumentin array ile verile bilmesidir.
Circle.apply({}, [1, 2])  // arguments as an array
                          // With the "apply()" method, it works the same way as the call but we pass the arguments as an array.

// Using the call or apply method is the same as the following code:
// const circle = new Circle(1)
// console.log(circle);
