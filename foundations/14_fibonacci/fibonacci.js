const fibonacci = function(num) {
    if (+num < 0) return "OOPS";
    let x = 0;
    let y = 1;

    // Holder of Fibonacci
    let arr = []
    
    for (let i = 0; i < num; i++) {
        arr.push(x);
        
        let temp = y;
        y += x;
        x = temp;
    }
    
    return x;
};

// Do not edit below this line
module.exports = fibonacci;
