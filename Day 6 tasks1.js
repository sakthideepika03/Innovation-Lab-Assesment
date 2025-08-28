// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Object Destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name, age); // John 30

// Nested Object Destructuring
const nested = { user: { name: 'Jane', details: { age: 25 } } };
const { user: { name: userName, details: { age: userAge } } } = nested;
console.log(userName, userAge); // Jane 25



const person = { name: 'John', age: 30 };
console.log(person.name); // John (dot notation)
console.log(person['age']); // 30 (bracket notation)




const person = { name: 'John', age: 30 };

// Using for...in
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Using Object.keys()
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Using Object.entries()
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
