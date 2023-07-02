// 09- Enumerating Properties - Burada daha yaxsi medencilik etmek lazimdir!
// Arashdirmaq ucun qaynaqlar:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

/*
There are different ways to iterate over the properties of an object.
We saw the for loops
*/

const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

// Using the for..in loop to get the properties and values of an object
// #1 only access key with loop || best way 1
for (let key in circle) { // in_loop with OBJECT returns keys, with ARRAY returns index numbers
  console.log(key, circle[key]);
}
// #2 only access key with loop
for (let key of Object.keys(circle)) { // of_loop with ARRAY returns values
  // The "Object.keys()" method will return an array of strings with the object properties.
  // "Object.keys()" method object icindeki butun property keylerini bir arrayda yigir.
  console.log(key, circle[key]);
}
// #1 ve #2 eyni sheylerdir.


// #3 access {key and value} || best way 2
for (let entry of Object.entries(circle)) {
  // The "Object.entries()" method will return an array with the object key value pair.
  console.log(entry);
}

if ("radius" in circle) console.log("Yes"); // With the in operator we can check if a given property exists in an object.

// In case we only want to display the properties we can use a if statement.
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);
}
