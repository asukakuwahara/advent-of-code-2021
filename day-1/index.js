const input = require("./input");

function countIncrease(depthList) {
  let count = 0;
  depthList.reduce((prev, current) => {
    prev < current && count++;
    return current;
  });
  return count;
}

const result = countIncrease(input);
console.log(result);
