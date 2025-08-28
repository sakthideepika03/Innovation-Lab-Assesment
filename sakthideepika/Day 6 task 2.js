const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Doe', age: 40 }
];
console.log(users);



function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6


const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const cloned = { ...obj1, ...obj2 };
console.log(cloned); // { a: 1, b: 2 }


function greet({ name, age }) {
  console.log(`Hello, ${name} is ${age} years old.`);
}
greet({ name: 'John', age: 30 }); // Hello, John is 30 years old.
