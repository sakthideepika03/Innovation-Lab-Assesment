// Function with fixed parameters
function greet(name, age) {
  console.log(Hello ${name}, you are ${age} years old.);
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
function showArguments() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(Argument ${i + 1}:, arguments[i]);
  }
}

showArguments("JS", "is", "fun!");
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

let input;
do{
    input = prompt("Enter a number 1 and 10: ");
}while(isNaN(input) || input > 10);
console.log("You entered: " + input);

let n = 10;
let sum = 0;
for (let i = 1; i <= N; i++){
    sum += i;
}
console.log("Sum of first" + N + "natural numbers: " +sum );

let N = 10;
for (let i = 1; i <= N; i++){
    let row ="";
    for (let j = 1; j <= 10; j++){
        row += (i * j)+ "\t";
    }
    console.log(row);
}