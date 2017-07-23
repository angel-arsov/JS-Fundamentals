function sumFirstLast(inputArray) {
    let firstElement = Number(inputArray[0]);
    let lastElement = Number(inputArray[inputArray.length - 1]);
    return firstElement + lastElement;
}

function evenPositionElement(inputArray) {
    let resultArray = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(i % 2 === 0) {
            resultArray.push(inputArray[i]);
        }
    }
    return resultArray.join(' ');
}

function negativePositiveNumbers(inputArray) {
    let resultArray = [];
    for(let element of inputArray) {
        if(element < 0) {
            resultArray.unshift(element);
        }else {
            resultArray.push(element);
        }
    }
    for(let element of resultArray) {
        console.log(element);
    }
}

function firstAndLastKNumbers(inputArray) {
    let firstElements = [];
    let lastElements = [];
    let k = inputArray[0];
    firstElements.push(inputArray.slice(1, k + 1));
    lastElements.push(inputArray.slice(inputArray.length - k, inputArray.length));
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}

function lastKNumbersSequence(n, k) {
    let result = [1];
    for(let i = 1; i < n; i++) {
        let nextElement = 0;
        let nextElementArr = [];
        if((result.length - k) < 0) {
            nextElementArr = result.slice(0, result.length);
        }else {
            nextElementArr = result.slice(result.length - k, result.length);
        }
        for(let num of nextElementArr) {
            nextElement += num;
        }
        result.push(nextElement);
    }
    console.log(result.join(' '));
}

function processOddNumbers(inputArray) {
    let oddPositionElements = [];
    for(let i = 0; i < inputArray.length; i++) {
        if(i % 2 !== 0) {
            oddPositionElements.push(inputArray[i]);
        }
    }
    let result = oddPositionElements
        .map(x => x * 2)
        .reverse();
    console.log(result.join(' '));
}

function smallestTwoNumbers(inputArray) {
    inputArray.sort((a, b) => a - b);
    let result = inputArray.slice(0, 2);
    console.log(result.join(' '));
}

function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach(
        c => biggestNum = Math.max(biggestNum, c)));
    return biggestNum;
}

function diagonalSums(matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    for(let i = 0; i < matrix.length; i++) {
        mainSum += matrix[i][i];
        secondarySum += matrix[i][matrix.length - i -1];
    }
    console.log(mainSum + ' ' + secondarySum);
}