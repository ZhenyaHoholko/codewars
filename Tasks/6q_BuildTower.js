// Task:
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
// A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  if (nFloors === 0) return [""];
  let arr = [];
  let bilding = new Array(nFloors).fill("");
  bilding.forEach((item, index) => {
    arr.push(
      " ".repeat(nFloors - index - 1) +
        "*".repeat(index * 2 + 1) +
        " ".repeat(nFloors - index - 1)
    );
  });
  return arr;
}

console.log(towerBuilder(6));
