function oddOrEven(array) {
  return array.reduce((sum, concat) => sum + concat, 0) % 2 === 0 ||
    (array.length == 1 && array[0] == 0)
    ? "even"
    : "odd";
}

console.log(oddOrEven([0]));
