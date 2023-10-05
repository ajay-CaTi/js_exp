// MOST IMPORTANT STUFF HERE

"use strict";

console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1985);

console.log(this);
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(
    this,
    "Arrow Beac arrow fun do have its on thi sso it points one level up its parent this"
  );
};

calcAgeArrow(1990);

const bro = {
  name: "ak",
  age: 30,
  calcAge: function () {
    console.log(2037 - this.age);
    return this.age;
  },
};

console.log(bro.calcAge());

const mattBro = {
  age: 40,
};

mattBro.calcAge = bro.calcAge;
console.log(mattBro.calcAge());

console.log("---------------------");

const bo = {
  name: "ak",
  year: 30,
  calAge: function () {
    let age = 45;
    let boy = "buddy";

    // let doing = function () {
    //   console.log(2037 - this.age);
    //   return this.age;
    // };

    // doing();

    // solution 2 use arrow fun whenu are in a method or use const self=this; has reference of parent "this "
    let doo = () => {
      console.log(this.boy);
      return this.boy, this.name;
    };

    console.log(doo());

    console.log(2037 - this.age);
    return this.age;
  },
  greet: () => {
    console.log(`Hey ${this.name}`);
  },
};

bo.calAge(); // Uncaught TypeError: Cannot read properties of undefined (reading 'age')

bo.greet();

var fn = "Bro";
console.log(this.fn);

// Arguements prints Array of values pass as a parameter

// call stack heap based example

let lastName = "Singh";
let oldLastName = lastName;
lastName = "Param";
console.log(lastName, oldLastName);

const billo = {
  fn: "Billo",
  ln: "Preet",
  age: 24,
};

const marriedBillo = billo;
marriedBillo.ln = "Singh";
console.log("Before shadi", billo);
console.log("After shadi", marriedBillo);

const billo2 = {
  fn: "Billo",
  ln: "Singh",
  age: 24,
  family: ["raman", "mannu"],
};

// Object.assign({}, billo2); ONLY WORKS on FIRST level(SHALLOW Copy), not worked DEEP CLone

const billoCopy = Object.assign({}, billo2);
console.log(billoCopy);
billoCopy.ln = "Preet";
console.log("Before shadi", billo2);
console.log("After shadi", billoCopy);
