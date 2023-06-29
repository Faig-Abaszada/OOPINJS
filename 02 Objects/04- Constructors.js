// 04 - Constructors

/*
The Constructor Functions job is to construct or create new objects.
For this types of function we use Pascal Notation instead of Camel Notation

Camel Notation: oneTwoThree
Pascal Notation: OneTwoThree

In this type of functions instead of returning an object we inicialize an object.

There is really no difference between factory and constructor function.
The Constructor is familiar to programers of C# or Java.
*/

function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw')
    };
};

// To create a new object using this function
const circle = new Circle(1)

/*
When we use the "new operator 3 thing happen":
    1. This operator creates an empty JavaScript object;
    2. Then it will set "this" operator statement to point to the empty object;
    3. Finally the "new" operator will return the object from the function.
*/

/*
      What we learned ?
        Object create etmeyin 3 yolu var:
         1. Onject literals syntax-i istifade edilerek -  let a = { ... }
         2. Factories - function createCircle (radius) { return { radius  }  }   call -> const circle1 = createCircle(1)
         3. Constructors -  function Circle(radius) { this.radius = raius  }    call -> const circle = new Circle(1)

 */
