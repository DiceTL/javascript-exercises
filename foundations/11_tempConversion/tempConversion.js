const convertToCelsius = function(num) {
    let C = (num - 32) * (5/9);
    if (Number.isInteger(C)) return C;
    else return +C.toFixed(1);
};

const convertToFahrenheit = function(num) {
    let F = (num * (9/5)) + 32;
    if (Number.isInteger(F)) return F;
    else return +F.toFixed(1);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
