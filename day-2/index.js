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

const resultPart1 = moveSubmarine(position, input);
console.log(resultPart1);

// Part 2
// position = { horizontal: 0, vertical: 0, aim: 0 }
// up/down only changes the aim
// forward changes the position according to the aim
// horizontal => forward value
// vertical => forward value * aim
// ... same for the rest

const position2 = { horizontal: 0, vertical: 0, aim: 0 };
const moveSubmarineWithAim = (position, instructions) => {
  instructions.map((instruction) => {
    const [command, value] = instruction.split(" ");
    if (command === "forward") {
      position.horizontal += parseInt(value);
      position.vertical += parseInt(value) * position.aim;
    } else if (command === "up") {
      position.aim -= parseInt(value);
    } else if (command === "down") {
      position.aim += parseInt(value);
    }
  });
  return position.vertical * position.horizontal;
};

const resultPart2 = moveSubmarineWithAim(position2, input);
console.log(resultPart2);
