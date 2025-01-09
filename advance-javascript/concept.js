// Everythiing in javascript happens in "Execution Context";
// when we run javascript it's create a execution context

// it's devide into two parts: first is memory  there variable store in key value pair memory also known as variable enviroment 
// second is code also known thread of execution there code is run line by line

// hoising in javascript

// shortest program js window || this keyword

// The scope chain and lexical enviroment

// wherever the execution context is create along with the lexical enviroment is also created

// let || var || const
//  temporal dead zone => temporal dead zone is a time snice when  the let variable is hoisted and when it's actually declared

// map VS filter
// Closures, Settimeout, ES6 features
// Block scope  (compound statement) => whatever the function and variable are accessable in the block it's called block scope
// BLOCK =>we group multiple satatement toghether in a block so we can use it where javascript expect a single statement
// and Shadowing in JS

// shadowing in js 
// let a = 10;
// var b = 20;
// const c = 30;
// {
//     let a = 40;
//     var b = 50;
//     const c = 60;  
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// // elligle shadowing in js
// let a = 10;
// {
//     var a = 20;
// }


// closures in js
// function along with there lexical scope forms the clousers it's known as clousers
// function outer (){
//     let a = 10;
//     function inner (){
//         console.log(a);
//     }
//      inner();
// }
// outer();

// USES OF CLOSURES
// -module design pattern 
// currying
// function like once
// memoize
// maintaining state in async word
// setTimeouts
// iterators
// and many more...

// call apply blind || function borrowing

// call method
// let obj = {
//     name : "pia",
//     age : 21,
//     display : function ( city , hobby){
//         console.log("Hii " + this.name  , city , hobby);
//     }
// };

// let obj1 = {
//     name : "ria",
//     age : 22,
// };

// obj.display.call(obj1,"bhopal", "coding");  // in call method we pass the argument as a comma seperated value

// obj.display.apply(obj1,["bhopal", "coding"]); // in apply method we pass the  second argument as a array

// let aboutPerson = obj.display.bind(obj1, "bhopal", "coding"); // bind method  is also look like call method but it's return the function instead of calling it who we can execute latter
// aboutPerson();


// adnavce closures 
// function x(){
//    for( var i = 1;i<=5;i++){
//     setTimeout(()=> {
//         console.log(i);
//    },i * 1000);
// }}
// x(); 

// function y(){
//     for( let i = 1;i<=5;i++){
//      setTimeout(()=> {
//          console.log(i);
//     },i * 1000);
//  }}
//  x(); 

//  function x(){
//     for( var i = 1;i<5;i++){
//         function close (x){
//             setTimeout(()=> {
//                 console.log(x);
//            },i * 1000);
//         }
//         close(i);
//  }}
//  x(); 



//  function
// anonymous function
// first class function
// function statement (function declaration)||  function expression 
// named function expression
// arrow function

// difference between function statement and function expression || Hoisting
// function statement
function x (){
    console.log('Hi');
}
x();

//function expression
var a = function (){
    console.log('HELLO');
}

//anonymous function || a function without name is anonymous function || anonymous function are used  as a values
// function (){

// }

// named function  expression || named function when access by there name it's give error bcoz it can't be access outer the function 
// only can access inside the function
var a = function xyz(){
    console.log('HELLO');
    console.log(xyz);
}

// parameter || argument
// function xyz (parameter){
//     console.log(parameter);
// }
// xyz(argument);

// first class function || first class citizen
// A first-class function in JavaScript is a function that is treated like any other value. This means:

// Stored in variables or properties: Functions can be assigned to variables.
// Passed as arguments: Functions can be passed as arguments to other functions.
// Returned from other functions: Functions can be returned as values from other functions.
// This allows for powerful programming paradigms like callback functions and higher-order functions.

// example >>>>>>>>>>
const greet = function(name) {
    return "Hello, " + name;
  };
  console.log(greet("Alice"));  // Output: Hello, Alice

//   example2>>>>>
function sayHello(callback) {
    console.log(callback("Bob"));
  }
  sayHello(function(name) {
    return "Hi, " + name;
  });  // Output: Hi, Bob
  

//   arrow function
// arraow function is a short hand syntax for writing function expression
// 
let x = () => {
    console.log("hello");
}
console.log(x);
