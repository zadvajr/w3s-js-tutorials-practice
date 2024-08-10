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

//The Function() Constructor - functions can also be defined with the builtin javascript function constructor called Function().
//Syntax
/**
 * let functionName = new Function(parameters, code block);
 */
//Example
let divide = new Function("a", "b", "return a / b");

//To invoke or call it
let output3 = document.getElementById("output3");
output3.innerHTML += divide(10, 2); //5

//Function Hoisting - JavaScript functions can be called before they are declared. This is because JavaScript function declarations are hoisted to the top of the containing function or script.
//Functions defined with function expressions are not hoisted.
//Example
let output4 = document.getElementById("output4");
output4.innerText += square(5); //25

//Function Declaration
function square(num) {
  return num * num;
}

//Self-Invoking Functions - A self-invoking function is a function that runs as soon as it is defined.
//Syntax
/**
 * (function() {
 * code block
 * })();
 */
//Example
(function () {
  document.getElementById("output5").innerText =
    "This was added by self-invoking function";
})();

//using functions as value
//js funtions can be used as value
function add(a, b) {
  return a + b;
}

let sumation = add(2, 3); //5
document.getElementById("output6").innerText += sumation;

//you can also use it in expression as follows
let addition = add(7, 3) + 5; //15
document.getElementById("output7").innerText += addition;

//Functions are objects
//In JavaScript, functions are first-class objects, which means they can be:
//stored in a variable, object, or array
//passed as an argument to a function
//returned from a function
//Example
let multiply = function (a, b) {
  return a * b;
};

let prod = multiply(2, 3); //6
document.getElementById("output8").innerText += prod;

//typeof function
document.getElementById("output9").innerHTML += typeof multiply; //function

//arguments object
//JavaScript functions have a built-in object called the arguments object.
function myFunction(a, b, c) {
  return arguments.length;
}

document.getElementById("output9").innerHTML += "<br>" + myFunction(2, 3, 4); //3

//toString() method - The toString() method returns the function as a string
let str = multiply.toString();
document.getElementById("output9").innerHTML +=
  "<br> Funtion to String: " + str;

//Arrow Functions - Arrow functions allow you to write shorter function syntax
//You dont need to use the function keyword and return keyword in arrow functions
//Syntax
/**
 * let functionName = (parameters) => expression
 */
//Example
const cube = (num) => num * num * num;
document.getElementById("output10").innerText += cube(3); //27
