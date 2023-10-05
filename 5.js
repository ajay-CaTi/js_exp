const arr = ["aman", "sona", 27 - 12, "good", ["ab", "bc", "cd", "de"]];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(i, arr[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercise ${exercise}`);

  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
  }
}
