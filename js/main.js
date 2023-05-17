"use strict";

const WELCOME_MESSAGE = `Hello World!`;

const output = document.querySelector('#js-output');
output.innerHTML = WELCOME_MESSAGE;


// const user = {
//   name: "John",
//   lastName: "Doe",
//   showFullName() {
//     console.log(this);
//     console.log(`${this.name} ${this.lastName}`);
//   },
//   updateName(newName) {
//     this.name = newName;
//   }
// }
//
// user.showFullName();
// user.updateName("Harold");
// user.showFullName();

// function showThis() {
//   console.log(this);
// }
//
// // showThis();
//
// const user = {
//   name: "John",
//   lastName: "Doe",
//   inside: {
//     insideValue: 1000,
//     showInsideValue() {
//       console.log(this.insideValue, this);
//     }
//   }
// }
//
// user.showContext = showThis;
//
// // user.showContext();
//
// user.inside.showInsideValue();


// const user = {
//   name: "John",
//   lastName: "Doe",
//   showFullName() {
//     console.log(`${this.name} ${this.lastName}`);
//   },
// }
//
// function getMessage(callback) {
//   console.log(this);
//   console.log(`Message od ${callback()}`);
// }
//
// getMessage(user.showFullName);

// const showThis = () => {
//   console.log("this from showThis", this);
// }
//
// function showThisFunc() {
//   console.log("this from showThisFunc", this);
// }
//
// showThis();
// showThisFunc();

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };
//
//     foo();
//     console.log("this in showThis: ", this);
//   },
// };
//
// hotel.showThis();

// const ob = {
//   pets: ["monkey", "fox"],
//   bindButton() {
//     console.log(this);
//
//     const that = this;
//
//     const btn = document.getElementById('my-button');
//     btn.addEventListener("click", function() {
//       console.log(this);
//       console.log(that);
//       console.log(that.pets);
//     })
//   }
// }
//
// ob.bindButton();


// function greet(greeting, myNumber) {
//   console.log(`${this.username} ${greeting}, i mój numer to: ${myNumber}`);
// }
//
// const user1 = {
//   username: "Mark"
// }
//
// const user2 = {
//   username: "Jane"
// }


// greet.call(user1, "Witaj", 102);
// greet.call(user2, "Witaj", 890);

// greet.apply(user1, ["Witaj", 4356]);

// function greet(name) {
//   return `${name}, witaj w <<${this.service}>>`;
// }
//
// const services = [
//   {
//     service: "Facebook"
//   },
//   {
//     service: "Tiktok"
//   }
// ];
//
// const fbGreet = greet.bind(services[0]);
// const ttGreet = greet.bind(services[1]);
// const anyGreet = greet.bind({ service: "Gmail" });
//
// console.log(fbGreet("John"));
// console.log(ttGreet("Jane"));
// console.log(anyGreet("Tom"));

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
//
// function makeMessage(callback) {
//   console.log(`Wiadomość od ${callback()}`);
// }
//
// makeMessage(customer.getFullName.bind(customer));



















