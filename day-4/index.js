const { example, calledNumbers } = require("./examples");
const fs = require("fs");
const array = fs.readFileSync("input.txt").toString().split("\n");
const bingoCalls = array[0].split(",");

const getStrings = (numbers) => {
  let cards = [];
  let tempArray = [];
  // remove the first line
  numbers.shift();

  for (index in numbers) {
    if (numbers[index] === "" && tempArray.length > 0) {
      cards.push(tempArray);
      tempArray = [];
      // push the last one
    } else if (parseInt(index) === numbers.length - 1 && tempArray.length > 0) {
      const cleanRow = numbers[index].split(" ").filter((line) => line !== "");
      tempArray.push(cleanRow);
      cards.push(tempArray);
    } else {
      if (numbers[index] !== "") {
        const cleanRow = numbers[index]
          .split(" ")
          .filter((line) => line !== "");
        tempArray.push(cleanRow);
      }
    }
  }
  return cards;
};
const newCards = getStrings(array);

function checkWinningLane(card, calledNumbers) {
  //   horizontal;
  for (let i = 0; i < 5; i++) {
    if (
      calledNumbers.includes(card[i][0]) &&
      calledNumbers.includes(card[i][1]) &&
      calledNumbers.includes(card[i][2]) &&
      calledNumbers.includes(card[i][3]) &&
      calledNumbers.includes(card[i][4])
    ) {
      return true;
    }
  }

  //   vertical;
  for (let i = 0; i < 5; i++) {
    if (
      calledNumbers.includes(card[0][i]) &&
      calledNumbers.includes(card[1][i]) &&
      calledNumbers.includes(card[2][i]) &&
      calledNumbers.includes(card[3][i]) &&
      calledNumbers.includes(card[4][i])
    ) {
      return true;
    }
  }

  let winDiagnolOne = true;
  let winDiagnolTwo = true;

  // diagonol one
  for (var i = 0; i < 5; i++) {
    if (!calledNumbers.includes(card[i][i])) {
      winDiagnolOne = false;
    }
    if (i === 4 && winDiagnolOne) {
      return true;
    }
  }

  // diagnol two

  for (var i = 0; i < 5; i++) {
    if (!calledNumbers.includes(card[4 - i][i])) {
      winDiagnolTwo = false;
    }
    if (i === 4 && winDiagnolTwo) {
      return true;
    }
  }
}

// play and get the winner
function play(newCards, bingoCalls) {
  const calledNumbers = [];
  for (numberIndex in bingoCalls) {
    calledNumbers.push(bingoCalls[numberIndex]);
    for (index in newCards) {
      if (checkWinningLane(newCards[index], calledNumbers)) {
        return (winner = {
          winner: newCards[index],
          calledNumbers,
          index: calledNumbers[calledNumbers.length - 1],
        });
      }
    }
  }
}

// container function, calculate results
function calculateResult(newCards, bingoCalls) {
  if (!play(newCards, bingoCalls)) {
    return "no hit!!";
  }
  const { winner, calledNumbers, index } = play(newCards, bingoCalls);
  const winningCard = winner.reduce((numbers, row) => numbers.concat(row));
  const filteredNumber = winningCard.filter(
    (number) => !calledNumbers.includes(number)
  );
  const sum = filteredNumber.reduce((a, b) => parseInt(a) + parseInt(b));

  return sum * index;
}

console.log(calculateResult(newCards, bingoCalls));
