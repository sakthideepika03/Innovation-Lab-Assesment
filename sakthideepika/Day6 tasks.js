const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

person.greet(); // Hello, I'm John

const greetFn = person.greet;
greetFn(); // Hello, I'm undefined (because `this` is not bound)

greetFn.call({ name: 'Jane' }); // Hello, I'm Jane
greetFn.apply({ name: 'Doe' }); // Hello, I'm Doe





const boundGreet = person.greet.bind({ name: 'Bound John' });
boundGreet(); // Hello, I'm Bound John




// call() invokes the function with specific `this` and individual arguments
// apply() invokes the function with specific `this` and an array of arguments
// bind() returns a new function with a permanently bound `this`
