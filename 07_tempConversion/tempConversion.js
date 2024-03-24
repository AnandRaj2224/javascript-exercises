const convertToCelsius = function(temperature) {
  const degreeCelsius = (5/9)*(temperature-32);
  return Number(degreeCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  const degreeFahrenheit = (9/5 *temperature) + 32;
  return Number(degreeFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
