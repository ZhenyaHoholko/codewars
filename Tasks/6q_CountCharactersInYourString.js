// Task:
// The main idea is to count all the occurring characters in a string. If you have a string like aba,
// then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let letters = String([...new Set(string.split(",").sort())]);
  let Array = {};
  for (let i = 0; i < letters.length; i++) {
    Array[letters[i]] = string
      .split("")
      .filter((item) => item == letters[i]).length;
  }
  return Array;
}

console.log(count("aba"));
