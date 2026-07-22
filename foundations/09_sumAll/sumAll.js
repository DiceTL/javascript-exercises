const sumAll = function(a, b) {
    let sum = 0;
    if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
        let start = (a < b) ? a : b;
        let end = (a > b) ? a : b;
        for (; start <= end; start++) {
            sum += start;
        }
        return sum;
    }
    else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
