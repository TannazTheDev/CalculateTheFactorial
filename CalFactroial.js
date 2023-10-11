function CalFactorial(number) {
    let result = 1;
    while (number > 0) {
        result *= number;
        number -= 1;
    }
    return result;
}
//Now let's try it
console.log(CalFactorial(5)); 