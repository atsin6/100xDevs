// function sum(a, b){
//     return a+b;
// }
// function sum(n){
//     return (n*(n+1))/2;
// }
// // function sum(){
// //     console.log("work")
// //     let n = process.env.NUMBER;
// //     return (n*(n+1))/2;
// // }

// let ans = sum(1, 4);
// console.log(ans);
// ans = sum(5);
// console.log(ans);
// // console.log("-----\n")
// // console.log(sum());

//Synchronous Code -------------
// function sum(n){
//     return (n*(n+1))/2;
// }

// let ans1 = sum(10);
// console.log(ans1);
// let ans2 = sum(100);
// console.log(ans2);
// let ans3 = sum(1000);
// console.log(ans3);

// I/O heavy Operations -------------
// const fs = require("fs"); // importing fs library

// const contents = fs.readFileSync("a.txt", "utf-8"); // reads file synchronously
// console.log(contents);

// const contents2 = fs.readFileSync("c.text", "utf-8"); //reads file asynchronously
// console.log(contents2);



// var user = {
//     age: 21,
//     name: "Atul",
//     calculateAge: function() {
//         return 10;
//     }
// }
// console.log(user.calculateAge());


//functional arguments
// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     // a=1;
//     // b=2;
//     // op=sum;
//     return op(a, b) //sum(1, 2);
//   }
  
//   console.log(doOperation(1, 2, sum));

//Asynchronous code and callback ------------------------

const fs = require("fs");

function print(err, data){
    console.log(data);
}

fs.readFile("a.txt", "utf-8", print); //asynchoronusly

fs.readFile("b.txt", "utf-8", print); //asynchronously

console.log("Done!");


// -------
// function timeout(){
//     console.log("Click the button");
// }
// console.log("hi");

// setTimeout(timeout, 1000);
// console.log("Welcome to loupe");

// let c = 0;
// for(let i = 0; i<1000000000000; i++){
//     c = c+1;
//     console.log(c);
// }
// console.log("Expensive operation done");


//-----------
// console.log("1");

// function two(){
//     console.log(2);
// }
// function four(){
//     console.log(4);
// }

// setTimeout(two, 5000);


// console.log("3");

// setTimeout(four, 5000);

// console.log("5");