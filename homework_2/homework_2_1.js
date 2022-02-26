function pinCodeGenerator(length) {
    result = '';
    numbers = '1234567890';
    numbersLength = numbers.length;
    for ( var i = 0; i < length; i++ ) {
        result += Math.floor(Math.random() * numbersLength);
    
    }
    return result;
}
console.log(pinCodeGenerator(5))