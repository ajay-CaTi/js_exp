// Spread opeartor Unpack the array into elements
// Rest opeartor Pack the elements in array

// NULLISH Coalescing Operator

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
  orderPizza: function (mainIngradient, ...otharIngradients) {
    console.log(mainIngradient);
    console.log(otharIngradients);
  },
};

//1. Destructuring

// Spread because right side of =
const arr = [1, 2, ...[3, 4]];

// Rest because of Left side of operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// in proper Objects EXACT name is require to destructure
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. Functions

const add = function (...numbers) {
  let sum = 0;
  for (const iterator of numbers) {
    sum += iterator;
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 5, 6);
add(4, 5, 6, 7, 8, 5, 1);

restaurant.orderPizza("mashrooms", "olives", "onion", "spanich");

restaurant.orderPizza("mashrooms");

// 3. NULLISH Coalescing Operator

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// in 2020 Nullish:null and undefined (Not 0 or '') Only Nullish values only shortcircut evaluation

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
