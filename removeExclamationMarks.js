// Write function removeExclamationMarks which removes all exclamation marks from a given string.

// MINE
function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}

// clever from code wars
// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }

const s = 'Hello World!!';
const result = removeExclamationMarks(s);
console.log(result);

// https://palettes.shecodes.io/athena/1279-how-to-remove-a-character-from-a-string-in-javascript#:~:text=in%204.47%20seconds-,The%20easiest%20way%20to%20remove%20a%20character%20from%20a%20string,the%20replace()%20function%2Fmethod.&text=var%20str%20%3D%20%22Hello%20World!,Output%3A%20%22ello%20World!%22