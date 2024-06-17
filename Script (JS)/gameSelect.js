import { rightNumber } from "./rightNumber.js";

export function gameselect() {
//récupérer les élèments dont on a besoin :
const gameMenu = document.querySelector('#game-select')
const gameZone = document.querySelector('.game-zone')


//actions/fonctions à appliquer

function gameChoice() {
    let choiceNumber = gameMenu.value

    switch(choiceNumber) {

        case '2':
        rightNumber(gameZone);
        break;
        default: 
        reset();
        break;
    }
    
}

gameZone.classList.add("apparence-zone");
function reset() {
    gameZone.innerHTML = "";
    gameZone.classList.remove("apparence-zone");
}

//les déclencheurs
{
gameMenu.addEventListener('change', gameChoice)
}












}

