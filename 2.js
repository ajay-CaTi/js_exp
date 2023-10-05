// Coding Challenge #3

const Koalas = (88 + 91 + 110) / 3;
const Dolphins = (96 + 108 + 89) / 3;

if (Dolphins > Koalas && Dolphins >= 100) {
  console.log(`Dolphins ${Dolphins} Wins`);
} else if (Dolphins < Koalas && Koalas >= 100) {
  console.log(`Koalas ${Koalas} Wins`);
} else if (Dolphins === Koalas && Koalas == Dolphins >= 100) {
  console.log(`Match Ties/Draw`);
} else {
  console.log("No one wins because avg score less than 100");
}

// 2 switch stmt
const day = "sunday";

switch (day) {
  case "tuesday":
    console.log("Day is tuesday");
    break;

  case "monday":
    console.log("Day is monday");
    break;

  case "sunday":
    console.log("Day is sunday");
    break;

  default:
    console.log("Day is unknown");
    break;
}

// Coding Challenge #4

// Tip calculator 15, 20
// bill 1: Test for bill values 275, 40 and 430

let bill = 275;
let percentage = 15;
let tip = 0;
let calcTip = (percentage / 100) * bill;

// if (50 <= bill1 <= 300) {
//   tip = (percentage / 100) * bill1;
//   console.log(`Bll is ${bill1} tip is ${tip} and total bil is ${bill1 + tip}`);
// } else {
//   tip = (percentage2 / 100) * bill1;
//   console.log(`Bll is ${bill1} tip is ${tip} and total bil is ${bill1 + tip}`);
// }

// ternary operator

50 <= bill <= 300
  ? console.log(
      `Bll is ${bill} tip is ${calcTip} and total bil is ${bill + calcTip}`
    )
  : console.log(
      `Bll is ${bill} tip is ${calcTip} and total bil is ${bill + calcTip}`
    );
