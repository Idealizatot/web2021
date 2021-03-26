document.addEventListener("DOMContentLoaded", ()=> {

    let buttonTeg = document.getElementById("buttonField");
    buttonTeg.addEventListener('click', display);

    function display() {
        let numbers = inputField.value.split("");

        displayNotEven(numbers);
        displaySquares(numbers);
        displyThreeMultiplesSum(numbers);
    }

    function displayNotEven(numbers){
        let notEvenNumbers = numbers.filter(number =>
            number.valueOf() % 2 !== 0
        );

        console.log("Not even numbers: " + notEvenNumbers.join());
    }

    function displaySquares(numbers){
        
        let squares = numbers.map(number =>
            Math.pow(number, 2)
        );

        console.log("Squares: " + squares.join(""));
    }

    function displyThreeMultiplesSum(numbers){
        
        let threeMultiplesSum = numbers.reduce((sumStr, currentNumberStr) => {
            let num = Number(currentNumberStr);
            let sum = Number(sumStr);

            if(num % 3 === 0){
                sum += num;
            }

            sumStr = String(sum);
           
            return sumStr;
        }, 0);

        console.log("Three Multiples Sum: " + threeMultiplesSum);
    }
});
