// My Submission
function basicOp(operation, value1, value2) {
  //Code

  if (operation === "+") {
    return (value1 + value2);
  } else if (operation === "-") {
    return (value1 - value2);
  } else if (operation === "*") {
    return (value1 * value2);
  } else if (operation === "/") {
    return (value1 / value2);
  } else {
    return "Invalid operation";
  }
}

const value1 = 4;
const value2 = 7;
const operation = "-";
const result = basicOp(operation, value1, value2);
console.log(result);


// Best Practice - switch statement
function basicOp(operation, value1, value2) {
  switch (operation) {
      case '+':
          return value1 + value2;
      case '-':
          return value1 - value2;
      case '*':
          return value1 * value2;
      case '/':
          return value1 / value2;
      default:
          return 0;
  }
}

// const value1 = 4;
// const value2 = 7;
// const operation = "-";
// const result = basicOp(operation, value1, value2);
// console.log(result);