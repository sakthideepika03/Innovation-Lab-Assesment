function multiply(x, y) {
    return x * y;
}
console.log(multiply(3, 4));

// Function expression
const multiplyExp = function(x, y) {
    return x * y;
};
console.log(multiplyExp(3, 4));

// Arrow function
const multiplyArrow = (x, y) => x * y;
console.log(multiplyArrow(3, 4));

// Arrow function with single parameter
const greet = name => console.log(Hello,$(name));
greet("Charlie");

// 'this' in arrow vs normal function
const person = {
    name: "Sakthideepika",
    greet: function() {
        console.log("Hi, I'm " + this.name);
    },
    greetArrow: () => {
        console.log("Hi, I'm " + this.name);
    }
};