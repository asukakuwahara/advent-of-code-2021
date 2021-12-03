const input = require("./input");

// forward, up, down
// position = { horizontal: 0, vertical: 0 }
// split the string into forward and up/down
// get the value as second part
// if forward => horizontal
// if up/down => vertical +-
// at the end, return the multiplied value of herizontal * vertical
// Part 1
const position = { horizontal: 0, vertical: 0 };
const moveSubmarine = (position, instructions) => {
  instructions.map((instruction) => {
    const [command, value] = instruction.split(" ");
    if (command === "forward") {
      position.horizontal += parseInt(value);
    } else if (command === "up") {
      position.vertical -= parseInt(value);
    } else if (command === "down") {
      position.vertical += parseInt(value);
    }
  });
  return position.vertical * position.horizontal;
};

const result = moveSubmarine(position, input);
console.log(result);
