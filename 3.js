const fun = function calcAge(birthYear) {
  return 2037 - birthYear;
};
console.log(fun(2000));

const fun1 = (birthYear) => {
  return 2037 - birthYear;
};

console.log(fun1(2000));

// fruits problem
// arrow function
const cutPieces = (fruits) => {
  return fruits * 4;
};

// Function expression

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = applePieces + orangePieces;
  return `juice of ${juice} pieces of apples and Oranges`;
};

console.log(fruitProcessor(4, 5));

// Coding Challenge #1

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

let calcAverage = (s1, s2, s3) => {
  return (s1 + s2 + s3) / 3;
};

let Dolphins = calcAverage(44, 23, 71);
let Koalas = calcAverage(265, 54, 49);

console.log(Dolphins, Koalas);

const checkWinner = (Dolphins, Koalas) => {
  if (Dolphins > Koalas) {
    if (Dolphins / 2 >= Koalas) {
      return `Dolphins Wins (${Math.floor(Dolphins)} vs ${Koalas})`;
    } else {
      return "No one wins";
    }
  } else if (Koalas > Dolphins) {
    if (Koalas / 2 >= Dolphins) {
      return `Koalas Wins (${Dolphins} vs ${Math.floor(Koalas)})`;
    } else {
      return "No one wins";
    }
  }
};
console.log(checkWinner(Dolphins, Koalas));
