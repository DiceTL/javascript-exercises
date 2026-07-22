const removeFromArray = function(arr, ...theArgs) {
    return arr.filter((item, index) => {
        for (removeItem of theArgs) {
            if (item === removeItem) {
                return;
            }
        }
        return item;
    });  
};

// Do not edit below this line
module.exports = removeFromArray;
