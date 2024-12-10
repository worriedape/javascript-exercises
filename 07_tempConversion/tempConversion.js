const convertToCelsius = function(fahre) {

let convert = ((fahre - 32) * 5/9);

return convert.toFixed(1)

};

const convertToFahrenheit = function(celsius) {

let convert = ((celsius - 32) * 9 / 5);

return convert.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
