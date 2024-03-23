const reverseString = function(string) {
  let outputStrings=string;
  let outputArray=outputStrings.split("");
  let answerString=outputArray.reverse("").join("");
  return answerString;
};

// Do not edit below this line
module.exports = reverseString;
