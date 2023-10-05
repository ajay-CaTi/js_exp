// VERY VERY IMPORTANT DESTRUCTURING

"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // With Default Values

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    add,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${add} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your juicy Pasta with ${ing1}, ${ing2}, ${ing3} ingradients`);
  },
};

// Real World Example
const ingradients = [
  prompt("Lets make pasta with Ingradient 1?"),
  prompt("Lets make pasta with Ingradient 2?"),
  prompt("Lets make pasta with Ingradient 3?"),
];

console.log(ingradients, "1");

restaurant.orderPasta(ingradients[0], ingradients[1], ingradients[2]);
restaurant.orderPasta(...ingradients);

// Objects After 2018 spread opertor also works on Object
const newRestaurant = { found: 1998, ...restaurant, founder: "Me" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Restauranto Roma";

console.log(restaurantCopy.name); // new
console.log(restaurant.name); // old

const data = restaurant.orderDelivery({
  time: "22:30",
  add: "lorem hfh ddhhd ststts",
  mainIndex: 2,
  starterIndex: 2,
});
console.log(data);

// SOme values

const data1 = restaurant.orderDelivery({
  add: "MOcha mera Mocha",
  starterIndex: 1,
});
console.log(data1);

const { name, openingHours, categories } = restaurant;

// New variable name
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//DEFAULT values

// const { menu = [], starterMenu: starters = [] } = restaurant;
const { menu, starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// MUTATING VAriables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // OVERWRITE a, b Values

// nested OBJECTS

const {
  thu: { open: o },
  fri,
  sat: { close: c },
} = openingHours;

console.log(o, c);

// SPREAD OPERATOR

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

// Array, Strings, Maps, sets are Iterable, BUT not Object

const str = "MyBro";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
