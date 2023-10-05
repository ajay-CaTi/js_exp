// When do not know how many iteration use WHile loop

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you roll dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("dice reach value 6, hence loop is about to end");
  }
}

//---------------------------

// Coding Challenge #4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   if (50 <= bills[i] <= 300) {
//     let tip = (15 / 100) * bills[i];
//     let total = bills[i] + (15 / 100) * bills[i];
//     console.log((15 / 100) * bills[i]);
//     tips.push(tip);
//     totals.push(total);
//   } else {
//     let tip = (20 / 100) * bills[i];
//     let total = bills[i] + (20 / 100) * bills[i];
//     console.log((20 / 100) * bills[i]);
//     tips.push(tip);
//     totals.push(total);
//   }
// }
// console.log(tips, totals);

//---------------------------

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// function sumAvg() {
//   let sum = 0;
//   for (const iterator of bills) {
//     sum += iterator;
//   }
//   return sum / bills.length;
// }
// console.log("Avg is ", sumAvg());

//---------------------------

const dd = {
  name: "ak",
  age: 45,
  bills: [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52],
};

console.table(dd);

const fahrenhite = +prompt("Enter fahrenhite temperature");

const findCel = (5 / 9) * (fahrenhite - 32);
console.log(findCel);
