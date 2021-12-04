const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().split("\n");

// Part 1
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
// Part 2

const filter = (input, indexOfLetter) => {
  if (input.length <= 1) return input;
  lines_with_1 = [];
  lines_with_0 = [];
  for (let i in input) {
    if (input[i][indexOfLetter] === "1") {
      lines_with_1.push(input[i]);
    } else {
      lines_with_0.push(input[i]);
    }
  }
  if (lines_with_0.length > lines_with_1.length) {
    input = lines_with_0;
  } else {
    input = lines_with_1;
  }
  indexOfLetter++;
  return filter(input, indexOfLetter);
};

const filterMinority = (input, indexOfLetter) => {
  if (input.length <= 1) return input;
  lines_with_1 = [];
  lines_with_0 = [];
  for (let i in input) {
    if (input[i][indexOfLetter] === "1") {
      lines_with_1.push(input[i]);
    } else {
      lines_with_0.push(input[i]);
    }
  }
  if (lines_with_0.length > lines_with_1.length) {
    input = lines_with_1;
  } else {
    input = lines_with_0;
  }
  indexOfLetter++;
  return filterMinority(input, indexOfLetter);
};
console.log(
  parseInt(filter(array, 0), 2) * parseInt(filterMinority(array, 0), 2)
);
