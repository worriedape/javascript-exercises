const palindromes = function (string) {
  let normal = string
    .toLowerCase()
    .split("")
    .filter((item) => /^[a-z0-9]$/.test(item));
    // defining a variables with all alphanumerical
    // characters and checking it to item with .includes
    // may be less computational intensive
    // and improves readability and maintainance

 let reversed = normal.slice().reverse();

 if(normal.join()===reversed.join()) {
    return true;
 } return false;
};

// Do not edit below this line
module.exports = palindromes;
