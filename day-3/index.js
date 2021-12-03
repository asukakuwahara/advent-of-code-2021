const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().split("\n");

// split the array in like _ _ _ _ _
// if 0, array[index] += 1
// instancesOfZero = {0: 0, 1: 0 }

// count how many instances of 0 and 1 in each digit
// gamma rate, map  0 > 1 ? 0 : 1
// epsilon rate, map 0 > 1 ? 1 : 0
// combine them with JS method

const example = [
  "100110100101",
  "101000010100",
  "100011000000",
  "001110100100",
  "110000110001",
];

const diagnoseSubmarine = (binaryNumbers) => {
  const table = {};
  const moreThanHalf = binaryNumbers.length / 2;
  binaryNumbers.forEach((number, index) => {
    const arrayOfNumber = number.split("");
    arrayOfNumber.forEach((number, index) => {
      if (number === "0") {
        if (!table[index]) {
          table[index] = 0;
        }
        table[index] += 1;
      }
    });
  });

  const tempGammaRate = [];
  const tempEpsilonRate = [];
  for (let index in table) {
    const majority = table[index] > moreThanHalf ? 0 : 1;
    const minority = table[index] > moreThanHalf ? 1 : 0;
    tempGammaRate.push(majority);
    tempEpsilonRate.push(minority);
  }
  const gammaRate = parseInt(tempGammaRate.join(""), 2);
  const epsilonRate = parseInt(tempEpsilonRate.join(""), 2);
  return gammaRate * epsilonRate;
};

console.log(diagnoseSubmarine(array));
