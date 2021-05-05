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
            document.getElementById("expression").innerHTML  = "";
            Action = action;

            if(action === "*"){
                Action = action;
                Value = +document.getElementById("expression").innerHTML;
            } else if(action === "/"){
                Action = action;
                Value = +document.getElementById("expression").innerHTML;
            } else if(action === "+"){
                Action = action;
                Value = +document.getElementById("expression").innerHTML;
            }else if(action === "-"){
                Action = action;
                Value = +document.getElementById("expression").innerHTML;
            } else if(action === "="){
                if(Actoin === "*"){
                    document.getElementById("result").innerHTML = Value * +document.getElementById("result").innerHTML; 
                }else if(Actoin === "/"){
                    document.getElementById("result").innerHTML = Value / +document.getElementById("result").innerHTML; 
                }else if(Actoin === "+"){
                    document.getElementById("result").innerHTML = Value + +document.getElementById("result").innerHTML; 
                }else if(Actoin === "-"){
                    document.getElementById("result").innerHTML = Value - +document.getElementById("result").innerHTML; 
                }
            } else{
                //let innerHTML = document.getElementById("expression").innerHTML;
                document.getElementById("expression").innerHTML = "";
            }

            console.log(Actoin);
        }
    }
});


     // class ButtonNumber {
        
    //     constructor(className) {
    //       this.className = className;
    //     }
      
    //     StartListening(){
    //         document.getElementsByClassName(this.className)
    //         .addEventListener('click', (event, innerText) => 
    //         eventHandler(event, document.getElementById(this.className).innerText));
    //     }

    //     eventHandler(event, innerText){
    //         let innerHTML = document.getElementById("expression").innerHTML;
    //         document.getElementById("expression").innerHTML += innerText;
    //     }
    // }

    
    //   new ButtonNumber("number0").StartListening();
    //   new ButtonNumber("number1").StartListening();
    //   new ButtonNumber("button2").StartListening();