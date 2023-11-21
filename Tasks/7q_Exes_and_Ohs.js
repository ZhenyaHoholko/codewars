// Task:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let o = [];
  let x = [];
  str.split("").map(function (item) {
    if (item.toLowerCase() === "x") {
      x.push(item);
    } else if (item.toLowerCase() === "o") {
      o.push(item);
    }
  });
  return x.length === o.length;
}
console.log(XO("ooxXm"));
