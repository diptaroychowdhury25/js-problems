function getNextInteger(input) {
    const number = parseInt(input, 10);
    
    if (isNaN(number)) {
        return "Please enter a valid integer.";
    }
    
    return number + 1;
}
const lastDigitOfID = 5; 
const nextInteger = getNextInteger(lastDigitOfID);
console.log("The next integer is:", nextInteger);