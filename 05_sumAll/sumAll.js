const sumAll = function(...total) {

    let sum;

    for( num of total) {
        sum += +num;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
