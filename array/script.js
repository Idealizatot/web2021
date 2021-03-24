document.addEventListener("DOMContentLoaded", ()=> {

    buttonField.addEventListener('click', display);

    function display() {
        displayNotEven();
        displaySquares();
        displyThreeMultiplesSum();
    //console.log("Three Multiples Sum: " + getThreeMultiplesSum(inputField.value));
    }

    function displayNotEven(){
        let numbers = inputField.value.split("");
        
        let notEvenNumbers = numbers.filter(function(number){
            return number.valueOf() % 2 !== 0;
        });

        let result = "";

        for(let elem of notEvenNumbers){
            result += String(elem);
        }

        console.log("Not even numbers: " + result);
    }

    function displaySquares(){
        let numbers = inputField.value.split("");
        
        let squares = numbers.map(function(number){
            return Math.pow(number, 2);
        });

        let result = "";

        for(let square of squares){
            result += square + " ";
        }

        console.log("Squares: " + result);
    }

    function displyThreeMultiplesSum(){
        let numbers = inputField.value.split("");
        
        let threeMultiplesSum = numbers.reduce(function(sumStr, currentNumberStr){
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
