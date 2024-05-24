var summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++){
    sum += i;
  }
  return sum;
}

const num = 2
console.log(summation(num));

// reflection:
// every function must have a return block