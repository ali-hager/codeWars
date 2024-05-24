// Reflections:
// clear your loop at the start

// function sum (numbers) {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
//   }
//   console.log(sum);
//   return sum;
// };

// const numbers = [0];
// const result = sum(numbers);

// console.log('The sum of numbers is ' + result);


// function sum(numbers){
//   console.log(numbers)
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }
//   return sum
// }

// const numbers = [2, 4, 6];
// const result = sum(numbers);
// console.log('The sum is ' + result);

function sum(numbers){
  return numbers.reduce((a, c) => a + c, 0);
}

const numbers = [2, 4, 6]
console.log('The sum is ' + sum(numbers));