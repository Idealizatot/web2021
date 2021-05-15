// document.addEventListener("DOMContentLoaded", ()=> {

//     let Value = 0;
//     let Actoin = "";
    
//     startListeningNumbersButtons();
//     startListeningFunctionalButtons();

//     function startListeningNumbersButtons(){
//         let numbersButtons = document.getElementsByClassName("number");
        
//         for(let i = 0; i < numbersButtons.length; i++){
//             numbersButtons[i].addEventListener('click', (event, value) => 
//                     eventHandler(event, numbersButtons[i].dataset.value));
//         }

//         function eventHandler(event, numberValue){
//             if(document.getElementById("expression").innerHTML == "0"){
//                 document.getElementById("expression").innerHTML = "";
//             }
//             document.getElementById("expression").innerHTML += numberValue;
//         }
//     }

//     function startListeningFunctionalButtons(){
//         let functionalButtons = document.getElementsByClassName("functional");
        
//         for(let i = 0; i < functionalButtons.length; i++){
//             functionalButtons[i].addEventListener('click', (event, innerText) => 
//                     eventHandler(event, functionalButtons[i].dataset.value));
//         }

//         function eventHandler(event, action){
//             if(action === "="){
//                 if(Actoin === "*"){
//                     document.getElementById("expression").innerHTML = Value * +document.getElementById("expression").innerHTML; 
//                 }else if(Actoin === "/"){
//                     document.getElementById("expression").innerHTML = Value / +document.getElementById("expression").innerHTML; 
//                 }else if(Actoin === "+"){
//                     document.getElementById("expression").innerHTML = Value + +document.getElementById("expression").innerHTML; 
//                 }else if(Actoin === "-"){
//                     document.getElementById("expression").innerHTML = Value - +document.getElementById("expression").innerHTML; 
//                 }
//             } else if(action === "C"){
//                 document.getElementById("expression").innerHTML = "";
//                 Actoin = "";
//                 Value = 0;
//             }
//             else{
//                 Value = +document.getElementById("expression").innerHTML;
//                 document.getElementById("expression").innerHTML  = "";
//                 Actoin = action;
//             }
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", ()=> {
    setFnForNumbers();
    setFnForActions();
});

let buffer = "";
let lastBuffer = "";
let actionType = "";

function setFnForNumbers() {
    const numbersButtons = document.getElementsByClassName("number"); 
    for(let i = 0; i < numbersButtons.length; i++) {
        numbersButtons[i].addEventListener('click', (event) => {
            checkClickForNumber(event.target);
        });
    }
}

function setFnForActions() {
    const actionButtons = document.getElementsByClassName("action");
    for(let i = 0; i < actionButtons.length; i++){
        actionButtons[i].addEventListener('click', (event) => {
            checkClickForAction(event.target);
        })
    }
}

function checkClickForNumber(btn) {
    buffer += btn.dataset.value; 
    document.getElementById("expression").innerHTML = buffer;   
}

function checkClickForAction(btn) {
    if (!actionType) {
        lastBuffer = buffer;
    } else{
        lastBuffer = getResult(lastBuffer, buffer, actionType);
    }
    
    actionType = btn.dataset.value;
    buffer = '';

    document.getElementById("expression").innerHTML = lastBuffer;   
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

function cancel(a, b) {
    return "";
}

function equal(a, b) {
    return "";
}

function getResult(a, b, fn) {
    const actions = {
        '+' : addition,
        '-' : subtraction,
        '*' : multiplication,
        '/' : division,
    };

    return actions[fn](+a, +b);
}
