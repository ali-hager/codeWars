// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If classmates < 0 or pages < 0 return 0.

// Example:
// classmates = 5, pages = 5: 25
// classmates = -5, pages = 5:  0

// MINE
function paperwork(n, m) {
  if (n > 0 && m > 0) return n * m;
  else {
    return 0;
  }
}

//clever answer from code wars
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0
// }

// if n>0 && m>0 then n*m otherwise return 0
// The function returns the product of n and m if both are positive, otherwise it returns 0.

const n = 5;
const m = 5;
const result = paperwork(n, m);
console.log(result);
