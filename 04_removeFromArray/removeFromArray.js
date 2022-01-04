const removeFromArray = function(myArr) {
    results = [];

    args = [].slice.call(arguments);
    eles = args.slice(1); // Get elements to remove

    for (let i = 0; i < myArr.length; i++) {
        if (!eles.includes(myArr[i])) {
            results.push(myArr[i]);
        }
    }
    return results;
};

// Do not edit below this line
module.exports = removeFromArray;
