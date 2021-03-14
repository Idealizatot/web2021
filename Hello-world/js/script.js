console.log('Скрипт подключен!')

function makeClick(event){
    console.log(event.target.innerText
         .split("")
         .reverse()
         .join(""));
}
let teg = document.getElementById("text");
teg.addEventListener('click', makeClick);