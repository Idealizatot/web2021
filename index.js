document.addEventListener("DOMContentLoaded", ()=> {

    addEventListeners();

    function addEventListeners(){
        for(let i = 0; i < 10; i++){
            let buttonId = "button" + i;
            document.getElementById(buttonId)
            .addEventListener('click', (event, innerText) => 
                eventHandler(event, document.getElementById(buttonId).innerText));
            }

        document.getElementById("buttonCancel")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonCancel").innerText));

        document.getElementById("buttonEqual")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonEqual").innerText));

        document.getElementById("buttonMultiplication")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonMultiplication").innerText));

        document.getElementById("buttonAddition")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonAddition").innerText));

        document.getElementById("buttonSubtraction")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonSubtraction").innerText));

        document.getElementById("buttonDivision")
        .addEventListener('click', (event, innerText) => 
        eventHandler(event, document.getElementById("buttonDivision").innerText));
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
            document.getElementById("expression").innerHTML = innerText;
        }
    }
});