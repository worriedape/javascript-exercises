const convertToCelsius = function(fahre) {

let convert = ((fahre - 32) * 5/9);

//return convert.toFixed(1)

return Math.round(convert * 10) / 10;
};

const convertToFahrenheit = function(celsius) {

let convert = ((celsius * 9/5) + 32);

//return convert.toFixed(1);
return Math.round(convert * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
