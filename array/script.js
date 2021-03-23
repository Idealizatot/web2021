
document.addEventListener("DOMContentLoaded", ()=> {

buttonField.onclick = function () {
    let strArray = inputField.value.split("");
    console.log("Even numbers: " + getEvenNumbers(strArray));
    console.log("Squares numbers: " + getSquaresNumbers(strArray));
    console.log("Three Multiples Sum: " + getThreeMultiplesSum(strArray));
}

function getEvenNumbers(strArray){
    let evenNumberStr = "";
    for(let str of strArray){
        let num = Number(str);
        if (num % 2 === 0){
            evenNumberStr += str;
        }
    }
    return evenNumberStr;
}

function getSquaresNumbers(strArray){
    let evenNumberStr = "";
    for(let str of strArray){
        evenNumberStr += String(Math.pow(Number(str), 2)) + " ";
    }
    return evenNumberStr;
}

function getThreeMultiplesSum(strArray){
    let evenNumberStr = 0;
    for(let str of strArray){
        let num = Number(str);
        if (num % 3 === 0){
            evenNumberStr += num;
        }
    }
    return evenNumberStr;
}
});
