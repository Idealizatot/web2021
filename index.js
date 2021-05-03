document.addEventListener("DOMContentLoaded", ()=> {

    let result = 0;
    
    startListeningNumbersButtons();
    startListeningFunctionalButtons();

    function startListeningNumbersButtons(){
        let numbersButtons = document.getElementsByClassName("number");
        
        for(let i = 0; i < numbersButtons.length; i++){
            numbersButtons[i].addEventListener('click', (event, value) => 
                    eventHandler(event, numbersButtons[i].dataset.value));
        }

        function eventHandler(event, numberValue){
            let innerHTML = document.getElementById("expression").innerHTML;
            document.getElementById("expression").innerHTML += numberValue;
        }
    }

    function startListeningFunctionalButtons(){
        let functionalButtons = document.getElementsByClassName("functional");
        
        for(let i = 0; i < functionalButtons.length; i++){
            functionalButtons[i].addEventListener('click', (event, innerText) => 
                    eventHandler(event, functionalButtons[i].innerText));
        }

        function eventHandler(event, innerText){
            if(innerText == "*"){
                console.log("Умножение");
            } else if(innerText == "/"){
                console.log("Деление");
            } else if(innerText == "+"){
                console.log("Сложение");
            }else if(innerText == "-"){
                console.log("Вычитание");
            } else if(innerText == "="){
                console.log("Равно");
            } else{
                let innerHTML = document.getElementById("expression").innerHTML;
                document.getElementById("expression").innerHTML = "";
            }
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