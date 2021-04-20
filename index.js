document.addEventListener("DOMContentLoaded", ()=> {

    let calculatorInterface = {
        button1Teg: document.getElementById("button1"),
        button2Teg: document.getElementById("button2"),
        button3Teg: document.getElementById("button3"),
        button4Teg: document.getElementById("button4"),
        button5Teg: document.getElementById("button5"),
        button6Teg: document.getElementById("button6"),
        button7Teg: document.getElementById("button7"),
        button8Teg: document.getElementById("button8"),
        button9Teg: document.getElementById("button9"),
        button0Teg: document.getElementById("button0"),
        buttonCancelTeg: document.getElementById("buttonCancel"),
        buttonEqualTeg: document.getElementById("buttonEqual"),
        buttonMultiplicationTeg: document.getElementById("buttonMultiplication"),
        buttonAdditionTeg: document.getElementById("buttonAddition"),
        buttonSubtractionTeg: document.getElementById("buttonSubtraction"),
        buttonDivisionTeg: document.getElementById("buttonDivision"),
    }

    initCalculatorInterface(calculatorInterface);

    function initCalculatorInterface(object){
        for (key in object) {
            object[key].addEventListener('click', (event, innerText) => 
            eventHandler(event, object[key].innerText));
        }
    };

    function eventHandler(event, innerText){
        if (innerText === "="){
            console.log("=");
        } else if(innerText === "+") {
            console.log("+");
        } else if(innerText === "-") {
            console.log("-");
        } else if(innerText === "*") {
            console.log("*");
        } else if(innerText === "/") {
            console.log("/");
        } else if(innerText === "C"){
            console.log("C");
        } else{
            document
            .getElementById("expression")
            .innerHTML = innerText;
        }
    }
});

// let button2Teg = document.getElementById("button2");
// button2Teg.addEventListener('click', (event, value) => 
// eventHandler(event, +button2Teg.innerText));

// eventHandler = function (event, value){
//     if(typeof value === "number"){
//         document.getElementById("output1").innerHTML = value;
//     }
// }