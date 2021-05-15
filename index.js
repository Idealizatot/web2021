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
        actionType = btn.dataset.value;
    } else if (btn.dataset.value === 'C'){
        lastBuffer = '';
        actionType = '';
    } else {
        lastBuffer = getResult(lastBuffer, buffer, actionType);
        actionType = btn.dataset.value;
    }
    
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
    return '0';
}

function equal(a, b) {
    return lastBuffer;
}

function getResult(a, b, fn) {
    const actions = {
        '+' : addition,
        '-' : subtraction,
        '*' : multiplication,
        '/' : division,
        '=' : equal
    };

    return actions[fn](+a, +b);
}
