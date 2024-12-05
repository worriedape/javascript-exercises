const repeatString = (string, num) => {
  let wordWord = "";
  if (num<0) return "ERROR";

  for (let i = 0; i < num; i++) {
    wordWord += `${string}`;
  }
  return wordWord;
};

// Do not edit below this line
module.exports = repeatString;
