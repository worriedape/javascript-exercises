const reverseString = (word) => {
  const wordToArray = word.split("");

  const reversedArray = wordToArray.reverse();

  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
