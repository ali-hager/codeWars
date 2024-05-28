// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let filter = arr.filter(n => n > 0);
  return filter.reduce((a, c) => a + c, 0)
}

const arr = [1,-4,7,12]
console.log('The sum is ' + positiveSum(arr));

// return n > 0 && m > 0 ? n * m : 0