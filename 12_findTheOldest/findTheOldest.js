const findTheOldest = function (collection) {
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

 // let years = collection.yearOfDeath - collection.yearOfBirth
  //return collection.sort((a, b)=> )

  

 /*let sortYears;

  if (!collection.yearOfDeath === undefined) {
    sortYears = collection.sort(
      (a, b) => (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth)
    );
  } else if(collection.yearOfDeath === undefined) {
    sortYears = collection.sort(
      (a, b) => (((new Date()).getFullYear()) - a.yearOfBirth) - (((new Date()).getFullYear()) - b.yearOfDeath)
    );
  }

  return sortYears;*/