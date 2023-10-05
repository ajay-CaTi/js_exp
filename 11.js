"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Break down a complex data structure into simple variables

const arr = [2, 3, 4];

const [x, y, z] = arr;
console.log(x, y, z);

let [first, , secoond] = restaurant.categories;

console.log(first, secoond);

// switching variables old METHOD
// let temp = first;
// first = secoond;
// secoond = temp;
// console.log(first, secoond);

// switching variables New METHOD
[first, secoond] = [secoond, first];
console.log(first, secoond);

console.log();

const [starter, main] = restaurant.order(2, 0);

console.log(starter, main);

const nested = [2, 4, [5, 6]];

const [one, , [three, two]] = nested;
console.log(one, three, two);

// All rest data values
const [a, ...b] = [8, 3, 40, 45];
console.log(a, b);

// Default values
const [c = 1, d, e = 1] = [4, 7];
console.log(c, d, e);
