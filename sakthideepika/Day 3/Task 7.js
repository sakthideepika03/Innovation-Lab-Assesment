// Function with fixed parameters
function greet(name, age) {
    console.log(Hello (name), your (age));
}
greet("Sakthideepika", 18);

// Function using rest operator for arbitrary arguments
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    console.log("Sum:", total);
}
sumAll(1, 2, 3, 4, 5);

// Function using arguments object (non-arrow)
function showArguments() {S
    for (let i = 0; i < arguments.length; i++) {
        console.log(Argument (i + 1), arguments[i]);
    }
}
showArguments("apple", "banana", "cherry");