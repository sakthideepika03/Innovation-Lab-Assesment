// Task 2: Data Types & Type Conversion

// Different data types
let num = 100;                      // Number
let str = "123";                    // String
let bool = false;                   // Boolean
let notDefined;                     // Undefined
let obj = { key: "value" };         // Object
let sym = Symbol("id");             // Symbol

// Display types
console.log(typeof num);           
console.log(typeof str);           
console.log(typeof bool);          
console.log(typeof notDefined);    
console.log(typeof obj);           
console.log(typeof sym);           

// Type Conversion
console.log(Number("456"));        
console.log(String(789));          

let implicitNum = "5" * 2;         
console.log("Implicit:", implicitNum);

let backToString = 55 + "";        
console.log("To string:", backToString);