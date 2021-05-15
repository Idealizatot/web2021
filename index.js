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
    } else if (btn.dataset.value === actionType){
        return;
    } else if (btn.dataset.value === 'C'){
        lastBuffer = getResult(lastBuffer, buffer, btn.dataset.value);
    } else {
        lastBuffer = getResult(lastBuffer, buffer, actionType);
    }

    if (btn.dataset.value === 'C'){
        actionType = '';
    } else {
        actionType = btn.dataset.value;
    }

    if (btn.dataset.value === '='){
        buffer = lastBuffer;
    } else {
        buffer = '';
    }
    
    document.getElementById("expression").innerHTML = lastBuffer;  
}

function getResult(a, b, fn) {

    const actions = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => a / b,
        '=' : (a) => b,
        'C' : () => ''
    };

    return actions[fn](+a, +b);
}
