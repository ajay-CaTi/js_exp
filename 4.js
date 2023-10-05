// const friends = ["ram", "lakhan", "bharat", "shatrughan"];
// console.log("My friends are ", friends.join(", "));
// console.log("My number of friends are ", friends.length, friends);
// console.log(friends.unshift("krishan"), friends);
// console.log(friends.includes("krishan"));

// ----------------------------

// Coding Challenge #2

// const calcTip = (bill) => {
//   const tipCalc = 50 <= bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
//   return ` Bill is: ${bill}\n tip is: ${tipCalc}\n total bill is: ${
//     bill + tipCalc
//   }`;
// };

// console.log(calcTip(100));

//---------------------

// Now use Array insted of single values
// Challenging#####

// const calcTip = (bills, tips) => {
//   let coll = [];
//   for (let i = 0; i < bills.length; i++) {
//     const tipCalc =
//       50 <= bills[i] <= 300
//         ? bills[i] * (tips[0] / 100)
//         : bills[i] * (tips[1] / 100);
//     coll.push(
//       ` Bill is: ${bills[i]}\n tip is: ${tipCalc}\n total bill is: ${
//         bills[i] + tipCalc
//       }`
//     );
//   }
//   return coll;
// };

// const bills = [125, 555, 44];
// const tips = [15, 20];

// console.log(calcTip(bills, tips).join(`\n \n `));

// Imporvement dynamic tip also

// OBJECTS -----------------------

// Coding Challenge #3

// const obj = {
//   name: "ram",
//   age: 45,
//   job: "teacher",
//   friends: ["krishan", "lakhan", "bharat", "shatrughan"],
// };

// console.log(obj);
// console.log(obj["age"]);
// console.log(obj.age);

// obj.location = "india";
// console.log(obj);

// CHALLANGE

// console.log(
//   `${obj.name} has ${obj.friends.length} friends, and his best friend is called ${obj.friends[0]}`
// );

// -----------------------

// Coding Challenge #3

const obj = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const obj1 = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

function calc() {
  const friend = [obj, obj1];

  let bmiVal = [];

  for (const iterator of friend) {
    console.log(`${iterator.name} has BMI ${iterator.calcBMI()}`);
    bmiVal.push({ bmi: iterator.calcBMI(), name: iterator.name });
  }
  let res = bmiVal.reduce((v1, v2) => {
    return v1.bmi > v2.bmi
      ? `${v1.name} BMI (${v1.bmi}) is higher than ${v2.name} BMI (${v2.bmi})`
      : `${v2.name} BMI (${v2.bmi}) is higher than ${v1.name} BMI (${v1.bmi})`;
  });
  return res;
}

console.log(calc());
