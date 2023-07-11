const person = { name: "Miguel" };
console.log(person);

// If we iterate over the members of this object we will not see its prototype methods defined in objectBase.

for (let key in person) console.log(key); // We will only see the key name.
