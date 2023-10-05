// Nullish Asignment operator

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

// ES2021 3 new logical operator

const res1 = {
  name: "Carpi",
  //   numGuests: 20,
  numGuests: 0,
};

const res2 = {
  name: "La Piazza",
  owner: "Geo Marika",
};

// OR Assignment operator
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 10;

// res1.numGuests ||= 10;
// res2.numGuests ||= 10;

// Logical Nullish Asignment operator(null or undefined)

res1.numGuests ??= 10;
res2.numGuests ??= 10;

// Loginal  And operator
res1.owner = res1.owner && "<ANONYMOUS>";
// res2.owner = res2.owner && "<ANONYMOUS>";
res2.owner &&= "<ANONYMOUS>";

console.log(res1);
console.log(res2);

// Looping Array th efor Of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//1. New Way just open your EYES

for (const iterator of menu.entries()) {
  console.log(`${iterator[0]} : ${iterator[1]}`);
}

//2. New Way just open your EYES

for (const [one, two] of menu.entries()) {
  console.log(`${one} : ${two}`);
}
