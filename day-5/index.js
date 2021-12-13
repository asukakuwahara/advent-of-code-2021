const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().split("\n");
const mappedArray = array.map((item) =>
  item.split(" -> ").map((i) => i.split(","))
);

const example = [
  [
    ["2", "4"],
    ["2", "5"],
  ],
  [
    ["3", "3"],
    ["1", "3"],
  ],
  [
    ["1", "3"],
    ["5", "3"],
  ],
  [
    ["2", "1"],
    ["2", "5"],
  ],
];

const table = {};

function getOverlaps(mappedArray) {
  let bigger = 0;
  let smaller = 0;
  mappedArray.map((item) => {
    const a = item[0][0];
    const b = item[0][1];
    const c = item[1][0];
    const d = item[1][1];

    if (a === c) {
      if (+b > +d) {
        bigger = +b;
        smaller = +d;
      } else {
        bigger = +d;
        smaller = +b;
      }

      for (let i = smaller; i <= bigger; i++) {
        addToTable(a, i);
      }
    } else if (b === d) {
      if (+a > +c) {
        bigger = +a;
        smaller = +c;
      } else {
        bigger = +c;
        smaller = +a;
      }

      for (let i = smaller; i <= bigger; i++) {
        addToTable(i, b);
      }
    }
  });
  return table;
}

function addToTable(first, second) {
  if (!table[`${first}-${second}`]) {
    table[`${first}-${second}`] = 1;
  } else {
    table[`${first}-${second}`] += 1;
  }
}

console.log(
  Object.values(getOverlaps(mappedArray)).filter((value) => value > 1).length
);

// [ '2,1', '2,2' ],['0,9', '5,9'], ['3, 5', '1, 4'], ['5, 4', '1, 3']
// { 0-1: 0, 1-1: 1, 1-2: 1, ... }
// { 0-9: 1, 1-9: 1, 2-9: 1}
// []
/**
 * example A ['3, 5', '3, 1']
 * 1-4, 2-4, 3-4, 3-5
 * 
 0  1  2  3  4  5
[0, 0, 0, 0, 0, 0] 0
[0, 0, 0, 0, 0, 0] 1
[0, 0, 0, 0, 0, 0] 2
[0, 0, 0, 0, 0, 0] 3
[0, 1, 1, 1, 0, 0] 4
[0, 0, 0, 1, 0, 0] 5

example B ['5, 2', '2, 2']
// 1-2, 1-3, 1-4, 1-5, 2-2, 2-3, 2-4, 2-5

 0  1  2  3  4  5
[0, 0, 0, 0, 0, 0] 0
[0, 0, 0, 0, 0, 0] 1
[0, 1, 1, 1, 1, 1] 2
[0, 1, 0, 0, 0, 0] 3
[0, 1, 0, 0, 0, 0] 4
[0, 1, 0, 0, 0, 0] 5
 */

// const val = ['a, b', 'c, d']
// val[0][0], val[0][1], val[1][0], val[1][1]
//

// through the array, find out what combinations require
// sort val[0][0] < val[1][0]
// sort val[0][1] < val[1][1]
