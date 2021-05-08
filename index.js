document.addEventListener("DOMContentLoaded", ()=> {

    let Value = 0;
    let Actoin = "";
    
    startListeningNumbersButtons();
    startListeningFunctionalButtons();

    function startListeningNumbersButtons(){
        let numbersButtons = document.getElementsByClassName("number");
        
        for(let i = 0; i < numbersButtons.length; i++){
            numbersButtons[i].addEventListener('click', (event, value) => 
                    eventHandler(event, numbersButtons[i].dataset.value));
        }

        function eventHandler(event, numberValue){
            if(document.getElementById("expression").innerHTML == "0"){
                document.getElementById("expression").innerHTML = "";
            }
            document.getElementById("expression").innerHTML += numberValue;
        }
    }

    function startListeningFunctionalButtons(){
        let functionalButtons = document.getElementsByClassName("functional");
        
        for(let i = 0; i < functionalButtons.length; i++){
            functionalButtons[i].addEventListener('click', (event, innerText) => 
                    eventHandler(event, functionalButtons[i].dataset.value));
        }

        function eventHandler(event, action){
            if(action === "="){
                if(Actoin === "*"){
                    document.getElementById("expression").innerHTML = Value * +document.getElementById("expression").innerHTML; 
                }else if(Actoin === "/"){
                    document.getElementById("expression").innerHTML = Value / +document.getElementById("expression").innerHTML; 
                }else if(Actoin === "+"){
                    document.getElementById("expression").innerHTML = Value + +document.getElementById("expression").innerHTML; 
                }else if(Actoin === "-"){
                    document.getElementById("expression").innerHTML = Value - +document.getElementById("expression").innerHTML; 
                }
            } else if(action === "C"){
                document.getElementById("expression").innerHTML = "";
                Actoin = "";
                Value = 0;
            }
            else{
                Value = +document.getElementById("expression").innerHTML;
                document.getElementById("expression").innerHTML  = "";
                Actoin = action;
            }
        }
    }
});