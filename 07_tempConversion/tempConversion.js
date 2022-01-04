const ftoc = function(degF) {
  degC = parseFloat(((degF - 32) * 5/9).toFixed(1));
  return Number.isInteger(degC) ? Math.round(degC) : degC;
};

const ctof = function(degC) {
  degF = parseFloat(((degC * 9/5) + 32).toFixed(1));
  return Number.isInteger(degF) ? Math.round(degF) : degF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
