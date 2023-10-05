let so = "amazing";
if (so === "amazing") console.log("Js is fun");

// [ 4, 5, 8 ] [ 10, 9, 1, 8 ] 2
// let arr1 = [4, 5, 8];
// let arr12 = [10, 9, 1, 8];
// let d = 2;

// function sum(arr1, arr2, d) {
//   let aa = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1[i] - arr12[i] <= d) {
//       aa++;
//     }
//   }
//   return aa;
// }

// console.log(sum(arr1, arr12, c));

// JavaScript Fundamentals – Part 1
// LECTURE: Values and Variables

// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions)

let country = "India";
let content = "Asia";
let population = "2.5cr";
console.log(country, content, population);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

let isIsland = country;
let d = true;
const lang = "Hindi";
console.log(country, content, population, lang, d, isIsland);

let finland = 6000000;

let calc = 2500000000 / 2 + 1 - finland;
console.log(calc);

console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(11 + "4" + 9 - 6); //1149

const jja = `${finland} and ${console.log("ghghghhg")}`; // ghghghhg
console.log(jja); // 6000000 and undefined

const mM = 78;
const hM = 1.69;

const mj = 92;
const hj = 1.95;

const mm = mM / (hM * hM);
console.log(mm);

const jj = mj / (hj * hj);
console.log(jj);

if (mm > jj) {
  console.log(`mark bmi ${mm} is greater than john bhi ${jj}`);
} else {
  console.log(`john bmi ${mm} is greater than mark bhi ${jj}`); 
}
