// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  const max = Math.max(...array)
  const min = Math.min(...array)
  array.splice(array.indexOf(max), 1);
  array.splice(array.indexOf(min), 1);
  return array.reduce((a, c) => a+c, 0);
};

const array = [1, 1, 11, 2, 3];
const result = sumArray(array);
console.log(result);
