//JavaScript Functions Definitions
//JavaScript Functions are defined with the function keyword
//You can create a function through function declaration or function expression

//Function Declaration - declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).
//Syntax
/**
 * function functionName(parameters) {
 * code block
 * }
 */
//Example
function product(a, b) {
  return a * b;
}

//To invoke or call it
let output = document.getElementById("output");
output.innerHTML += product(2, 3); //6

//NOTE: Semicolons are used to separate js executable statements. Since function declaration is not an executable statement, it is not necessary to end it with a semicolon.

//Function Expression - JavaScript functions can also be defined using an expression. A function expression can be stored in a variable
//Syntax
/**
 * let functionName = function(parameters) {
 * code block
 * }
 */
//Example
let sum = function (a, b) {
  return a + b;
};

//To invoke or call it
let output2 = document.getElementById("output2");
output2.innerHTML += sum(2, 3); //5
