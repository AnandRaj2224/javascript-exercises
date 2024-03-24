const palindromes = function (str) {
  let charsWithoutExclamation = str.split("").filter(char => char !== "!");
  // Reverse the array of characters
  let reversedChars = charsWithoutExclamation.reverse();
  // Insert exclamation marks at their original positions
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "!") {
      reversedChars.splice(i, 0, "!");
    }
  }
  // Join the characters in the reversedChars array to form the reversed string
   if((reversedChars.join("")).toUpperCase() === str.toUpperCase()) return true;
   else return false;
};

// Do not edit below this line
module.exports = palindromes;
