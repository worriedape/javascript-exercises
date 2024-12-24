const findTheOldest = function (collection) {
    // to avoid mutating the original array, you could
    // use return [...collection] for a shallow copy:
    /*
     return [...collection]
    .sort(
      (a, b) =>
        ((b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth) -
        ((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth)
    )[0];
    */
 collection.sort(
   (a, b) =>
     ((b.yearOfDeath || new Date().getFullYear()) -
     b.yearOfBirth) -
     ((a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth)
 );
 return collection[0];
};

// Do not edit below this line
module.exports = findTheOldest;