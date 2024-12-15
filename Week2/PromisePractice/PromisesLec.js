// class Rectangle {
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }
//     area(){
//         const area = this.width * this.height;
//         return area;
//     }
//     paint(){
//         console.log(`Painting with color ${this.color}`);
//     }
//     perimeter(){
//         const peri = 2*(this.width + this.height);
//         return peri;
//     }
// }
// class Circle{
//     constructor(radius, color){
//         this.radius = radius;
//         this.color = color;
//     }
//     area(){
//         const area = this.radius*this.radius*Math.PI;
//         return area;
//     }
// }
// console.log("-----------Rectangle-----------");
// const rect = new Rectangle(12, 6, "White");
// const area = rect.area();
// const peri = rect.perimeter();
// rect.paint();
// console.log("Area: "+area+"\nPerimeter: "+peri+"\n");


// console.log("------------Circle------------");
// const circ = new Circle(1, "Red");
// console.log("Area of Circle: "+circ.area());
// console.log("Color of circle: "+circ.color);


//----------------------------------------------------------------------------------


// Inheritance

// class Shape{
//     constructor(color){
//         this.color = color;
//     }
//     area(){
//         throw new Error("The area must be implemented in the subclass")
//     }
//     paint(){
//         console.log(`Paint with color ${this.color}`);
//     }
//     getDescription(){
//         return `A shape with color ${this.color}`;
//     }
// }
// class Rectangle extends Shape {
//     constructor(width, height, color) {
//         super(color);  // Call the parent class constructor to set the color
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     getDescription() {
//         return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
//     }
// }
// class Square extends Rectangle{
//     constructor(side, color){
//         super(side, side, color);
//         // this.side = side;
//         // this.color = color;
//     }
//     // area(){
//     //     const area = this.side * this.side;
//     //     return area;
//     // }
//     getDescription(){
//         return `A Square with side ${this.side} and color ${this.color}`;
//     }
// }

// class Circle extends Shape {
//     constructor(radius, color) {
//         super(color);  // Call the parent class constructor to set the color
//         this.radius = radius;
//     }

//     area() {
//         return Math.PI * this.radius * this.radius;
//     }

//     getDescription() {
//         return `A circle with radius ${this.radius} and color ${this.color}`;
//     }
// }
// console.log("-------------Square--------------")
// const sqr = new Square(5, "Yellow");
// sqr.paint();
// let areaOfSq = sqr.area();
// console.log(areaOfSq);
// console.log(sqr.getDescription());

//-------------------------------------------------------------------------------------------------

// Built-in Classes of JS

//Date Class
// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());


//Map class ---
// const map = new Map();
// map.set('name', 'Alice');
// map.set('age', 30);
// console.log(map.get('name'));

//----------Promise class ---------


// function logName(){
//     console.log("Harkirat");
// }

// setTimeout(logName, 3000); //callback based approach


//promises are just way to write something similar to above code in simpler way
// Callback based approach OR // promise based approach

// function setTimeoutPromisified(ms){
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function afterDone(){
//     console.log("5 seconds have passed.");
// }
// setTimeoutPromisified(5000).then(callback); //Promisified approach. It is syntactically cleaner 

// let p = setTimeoutPromisified(5000); // returning the object of promise class
// console.log(p);



//more simplified version
// function promiseCallback(resolve){
//     setTimeout(resolve, 3000);
// }
// function main(){
//     console.log("main is called");
// }
// promiseCallback(main);



// function promiseCallback(resolve){
//     setTimeout(resolve, 3000);
// }
// function setTimeoutPromisified(){
//     return new Promise(promiseCallback);
// }

// function callback() {
//     console.log("3 seconds have passed")
// }

// setTimeoutPromisified().then(callback); //Promise based approach

// console.log("Pitty");



// How to write promise
// function random(resolve){ // resolve is also a function
//     setTimeout(resolve, 3000);
// }
// let p = new Promise(random); // A promise is supposed to return me something eventually

// //using the eventual value returned by the promise
// function callback(){
//     console.log("Promise succeded");
// }
// p.then(callback); 
// console.log(p);



//************Assignment*************//
//Create the promisified version of setTimeout, fs.readFile, clearFile etc.

//Promisified setTimeout()

// function data(){
//     console.log("Data is printed");
// }
// setTimeout(data, 3000);

// function KuchBhi(resolve){
//     setTimeout(resolve, 3000);
// }
// let p = new Promise(KuchBhi);

// function callbackFunc(){
//     console.log("Notification: KuchBhi() is successfully executed.");
// }
// p.then(callbackFunc);
// console.log("**********");

// function promisifiedSetTimeout(ms){
//     return new Promise(resolve => {
//         setTimeout(resolve, 3000);
//     })
// }

// promisifiedSetTimeout(3000).then(data);

//**********Promisified fs.read()*************//
const fs = require('fs');
// function print(err, data){
//     console.log(data);
// }
// fs.readFile('a.text', 'utf-8', print);

function promisifiedReadFile(path, encoding="utf-8"){
    return new Promise(resolve => {
        fs.readFile(path, encoding, (err, data) => {
            console.log(data);
            resolve();
        });
    })
}
promisifiedReadFile("b.txt").then(()=>{
    console.log("File content: ");
});

