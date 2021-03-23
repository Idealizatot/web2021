
document.addEventListener("DOMContentLoaded", ()=> {

buttonField.onclick = function () {
    console.log("Even numbers: " + getEvenNumbers(inputField.value));
    console.log("Squares numbers: " + getSquaresNumbers(inputField.value));
    console.log("Three Multiples Sum: " + getThreeMultiplesSum(inputField.value));
}

function getEvenNumbers(inputFieldValue){
    let evenNumbers = "";
    for(let char of inputFieldValue){
        if (char.valueOf() % 2 === 0){
            evenNumbers += char;
        }
    }
    return evenNumbers;
}

function getSquaresNumbers(inputFieldValue){
    let numbersSquares = "";
    for(let char of inputFieldValue){
        numbersSquares += String(Math.pow(char.valueOf(), 2)) + " ";
    }
    return numbersSquares;
}

function getThreeMultiplesSum(inputFieldValue){
    let threeMultiplesSum = 0;
    for(let char of inputFieldValue){
        let num = Number(char);
        if (num % 3 === 0){
            threeMultiplesSum += num;
        }
    }
    return threeMultiplesSum;
}
});
