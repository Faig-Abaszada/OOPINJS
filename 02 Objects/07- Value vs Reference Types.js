// 07- Value vs Reference Types

/*
As we seen before in JavaScript we have two category of type

Primitives Types (or Value Types)
    String
    Numbers
    Boolean
    Symbol
    undefined
    null (object)

Reference Types (or Objects)
    Objects
    Array
    Function


*/

let x = 10;
let y = x;

x = 20;

console.log(y); // It returns 10.
//Primitives are independent, the value is stored inside of the variable.
// Primitivlər müstəqildir, dəyər dəyişənin daxilində saxlanılır.

let xObj = {value: 10};
let yObj = x;

x.value = 20;

console.log(yObj); // It return also 20. x and y  values are same
// In using object they are not stored in the variable.
// They are stored somewhere in the memory, and the address (or the reference) of that place in memory is store in the variable.
// Obyektdən istifadə edərkən onlar dəyişəndə saxlanmır.
// Onlar yaddaşın hər hansı bir yerində saxlanılır və yaddaşdakı həmin yerin ünvanı (və ya istinadı) dəyişəndə saxlanılır.
// Meselen: x =  (1234 adresdeki) -> { value:10 }
// Bu zaman eger biz bu deyishkeni bashqa deyishkene assign edersek o zaman
// y = x -> (1234 adresdeki) -> { value:10 } .... bu zaman x filan adresdeki value-a istinad edir.
// Summary : adress ve ya referance copy edilir. x ve y-in baxdigi adress eyni olur ona gore biri deyishdikde digeride deyishir.

// Primitives are copied by their value.
// Objects are copied by their reference.


let number = 10;

function increase(number) { // number is 10 amma bu parametrdeki deyer increase(number)-dan copied olundu , yani sadece value copied olundu.
    number++; // This is 11
}

increase(number);
console.log(number); // It returns 10.
// When we call increase and pass the number variable to that functions as an argument.
// The "number" variable is completely independent from the "number" paramter in the "increase()" function.
// The "number" parameter is local to the "increase()" function.



let obj = {value: 10};

function increase(obj) { // Buradadaki object obj deyiskeni eyni adrese istinad edirler
    obj.value++;
}

increase(obj); // Burada artiq oturduyumuz deyer referansi ile birlikde oturuldu ( yani tutuldu yerin adresi ile birlikde )
console.log(obj); // It returns { value: 11 }.

// In this case we are not dealing with two independent copies.
// So any changes made to that object will be visible in the variable.
