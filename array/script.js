document.addEventListener("DOMContentLoaded", ()=> {

    let buttonTeg = document.getElementById("buttonField");
    buttonTeg.addEventListener('click', display);

    function display() {
        let numbers = inputField.value.split("").map(_number => Number(_number));

        displayNotEven(numbers);
        displaySquares(numbers);
        displyThreeMultiplesSum(numbers);
    }

    function displayNotEven(numbers){
        let notEvenNumbers = numbers.filter(number =>
            number % 2 !== 0
        );

        console.log("Not even numbers: " + notEvenNumbers.join(""));
    }

    function displaySquares(numbers){
        let squares = numbers.map(number =>
            Math.pow(number, 2)
        );

        console.log("Squares: " + squares.join(" "));
    }

    function displyThreeMultiplesSum(numbers){
        let threeMultiplesSum = numbers.reduce((sum, currentNumber) => {

            if(currentNumber % 3 === 0){
                sum += currentNumber;
            }

            return sum;
        }, 0);

        console.log("Three Multiples Sum: " + threeMultiplesSum);
    }
});
