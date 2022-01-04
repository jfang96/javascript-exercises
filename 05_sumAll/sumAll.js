const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number') {
        return 'ERROR';
    } 

    if (start < 0 || end < 0) { 
        return 'ERROR';
    }

    sum = 0;
    for (let i = Math.min(start, end); i <= Math.max(start, end); i++) {
        sum += i;
    }
    return sum;
};

console.log(sumAll(-10, 5));

// Do not edit below this line
module.exports = sumAll;
