const input = require("./input");
// part 1
const countIncrease = (depthList) => {
  let count = 0;
  depthList.reduce((prev, current) => {
    prev < current && count++;
    return current;
  });
  return count;
};

const resultPart1 = countIncrease(input);
console.log(resultPart1);

// part 2
const countWindowIncrease = (depthList) => {
  let count = 0;
  depthList.forEach((depth, index) => {
    const firstWindow =
      depthList[index] + depthList[index + 1] + depthList[index + 2];
    const secondWindow =
      depthList[index + 1] + depthList[index + 2] + depthList[index + 3];

    firstWindow < secondWindow && count++;
  });
  return count;
};

const resultPart2 = countWindowIncrease(input);
console.log(resultPart2);
