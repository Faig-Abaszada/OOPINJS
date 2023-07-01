// 05- Constructor Property

/*
Every object in JavaScript has a property called "constructor" that references the function that was used to create that objects
*/



// Constructor Function
// Console it and see what happens
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("Draw");
  };
}

const circleConstructor = new Circle(1);
console.log(circleConstructor.constructor); // [Function: Circle] This returns our circle function that we use to create this object.
// returns that function which was used to create that circleConstructor object : Circle(radius) {}
// Summary: return olunan funksiyanin adi Circledir hansiki biz bu constructoru ozumuz yaratmishiq adinada Circle demisik.


// Factory Function
function createCircle(radius, x, y) {
  return {
    radius, // in JavaScript if our key and value are the same "radius: radius", we can make our code sorter and simply remove the value.
    location: {
      x,
      y,
    },
    draw() {
      // For functions we don't need the full function syntax to define the function.
      console.log("Draw");
    },
    move() {
      console.log("Move");
    },
  };
}

const circleFactory = createCircle(1, 2, 3);
console.log(circleFactory.constructor);
// returns that function which was used to create that circleFactory object : Object(radius) {}
// Summary: return olunan funksiyanin adi "Object"-dir. Ve funckiyanin ilk herfi Uppercasdir. Ve bu o demekdirki bu constructor funksiyasi
// icinde yaradilmishdir. Ama gorduyumuz kimi biz yalniz Funksiya istifade etmekler bu objecti sadece return etmishik ve bu o demekdirki buarada
// object literal "{}"  isrtifade etmishik . Ve daxili Javascript muherrikinde object yaradarken default olaraq bu gorduyumuz "Object()"
// constructorunu istifade edir. Yani biz funskya ile ve ya object literal ile object yaratdiqda bu araxada new Object() deyerek Object
// cosntructoru altinda objecti yaradir.
// Summary:   {} -> constructor name Object() ,,,,  function Circle(radius) {}  new Circle() -> cosntructor name Circle

/*
[Function: Object] In this case it returns a built-in constructor function "Object()".
When we create an object using the object literal syntax, internally JavaScript uses the "Object()"
let x = {};  JavaScript will do this:
let x = new Object()
*/

/*
# Her object-in constructor property-si var ve ve property bu objecti yaratmaqda istifade olunan funksiyaya referans edir.
# Asagidakilarin her biri bir objectdir sadece js terefinden her birinin adlandirilmasi olduguna gore '..constructor' dedikde
  String , Booelan ..  oldugunu deyir. neceki siz ozunuz constructor yaradirsiz ad teyin edirsiz bu adlar da eynile js engine terefinden
  default olaraq teyin edilibler. Yox eger

let a = '';  ===  new String();
console.log(a.constructor) => ƒ String() { [native code] }  ---> constructoru String-dir
let b = {}; === new Object();
console.log(b.constructor) => ƒ Object() { [native code] }  ---> constructoru Object-dir
let c = true; === new Boolean;
console.log(c.constructor) => ƒ Boolean() { [native code] }  ---> constructoru Boolean-dir
*/


// Suallar: eger createCircle kimi factory olaraq object yox string return etsek yene de cosntor name-i String olaraq verecekmi?
