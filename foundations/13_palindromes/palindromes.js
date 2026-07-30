/*
    GET str
    REMOVE spaces and punctuations of str
    INIT reverseStr as the reverse of str
    COMPARE if str and reverseStr is equal if yes, return true, else return false;
*/

const palindromes = function (str) {
    const unneededChars = [".", "!", "?", ",", " "];
    let newStr = str;
    for (char of str) {
        if (unneededChars.includes(char)) newStr = newStr.replace(char, "");
    }

    newStr = newStr.toLowerCase();
    let reversedStr = newStr
                        .split("")
                        .reverse()
                        .join("")
                        .toLowerCase();
    
    console.log(reversedStr);
    console.log(newStr);
    
    return (newStr === reversedStr);
};

// Do not edit below this line
module.exports = palindromes;
