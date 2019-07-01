//UTILIZAÇÃO DE LET
let arr_Memory = []
let arr_User = []
let index = 0;

let btn_start = document.getElementById("btn_start");

//UTILIZAÇÃO DE ARROW FUNCTION
btn_start.addEventListener("click", () => {
    iniciarJogo();
}, false);

function resetaVariaveis(){
    index = 0;
    arr_Memory = [];
    arr_User = [];
}

//UTILIZAÇÃO DE STRING TEMPLATE
function iniciarJogo(){
    alert(`Prepare-se!
            O jogo será iniciado!`)
    resetaVariaveis();
    acrescentaListaMemoria();
}

function acrescentaListaMemoria(){
    index++;
    let prox = getRandomArbitrary();
    arr_Memory.push(prox);
}

//UTILIZAÇÃO DE PARÂMETROS PRÉ-DEFINIDOS
function getRandomArbitrary(min = 1, max = 4) {
    return Math.trunc(Math.random() * (max - min) + min);
}