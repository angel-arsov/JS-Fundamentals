function janNotation(inputArray) {
    let calculatorArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(typeof inputArray[i] === "number") {
            calculatorArray.push(inputArray[i]);
        }else if(typeof inputArray[i] === "string") {
            if(calculatorArray.length < 2) {
                console.log('Error: not enough operands!');
                calculatorArray.length = 0;
            }else {
                switch (inputArray[i]) {
                    case '+': calculatorArray.splice(calculatorArray.length - 2, calculatorArray.length,
                        calculatorArray[calculatorArray.length - 2] + calculatorArray[calculatorArray.length - 1]);
                        break;
                    case '-': calculatorArray.splice(calculatorArray.length - 2, calculatorArray.length,
                        calculatorArray[calculatorArray.length - 2] - calculatorArray[calculatorArray.length - 1]);
                        break;
                    case '*': calculatorArray.splice(calculatorArray.length - 2, calculatorArray.length,
                        calculatorArray[calculatorArray.length - 2] * calculatorArray[calculatorArray.length - 1]);
                        break;
                    case '/': calculatorArray.splice(calculatorArray.length - 2, calculatorArray.length,
                        calculatorArray[calculatorArray.length - 2] / calculatorArray[calculatorArray.length - 1]);
                        break;
                }
            }
        }
    }
    if(calculatorArray.length > 1) {
        console.log('Error: too many operands!');
    }else if(calculatorArray.length === 1) {
        console.log(calculatorArray[0]);
    }
}

janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);