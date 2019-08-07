//UTILIZAÇÃO DE LET
let arr_Memory = []
let arr_User = []
let indice = 0;
let jogoIniciado = false;

let btn_start = document.getElementById("btn_start");
let btn_colors = document.querySelectorAll(".btn_color");

//UTILIZAÇÃO DE ARROW FUNCTION
btn_start.addEventListener("click", () => {
    iniciarJogo();
}, false);

function resetaVariaveis() {
    indice = 0;
    arr_Memory = [];
    arr_User = [];
}

btn_colors.forEach(btn => {
    btn.addEventListener("click", (element) => {
        clicaCor(element.target.id);
    }, false);
});

//UTILIZAÇÃO DE STRING TEMPLATE
function iniciarJogo() {
    resetaVariaveis();
    acrescentaListaMemoria();
    exibeListaMemoria();
    jogoIniciado = true;

    // let audio = document.getElementById('audio_amarelo');
    // audio.play();
}

function acrescentaListaMemoria() {
    let prox = getRandomArbitrary();
    arr_Memory.push(prox);
}

function clicaCor(id) {
    if (!jogoIniciado) {
        return;
    }

    if (id != arr_Memory[indice]) {
        audio = document.getElementById('aerro');
        audio.play();
        jogoIniciado = false;
        return;
    }

    indice++;
    audio = document.getElementById('a' + id);
    audio.play();

    if (indice == arr_Memory.length) {
        acrescentaListaMemoria();
        exibeListaMemoria();
        sleep(2000);
    }
}

function exibeListaMemoria() {

    disableScreen();
    async function loop() {
        for (let i = 0; i < arr_Memory.length; i++) {
            await delay(200);
            audio = document.getElementById('a' + arr_Memory[i]);
            element = document.getElementById(arr_Memory[i]);
            element.classList.add('evidencia');
            audio.play();
            await delay(500);
            document.getElementById(arr_Memory[i]).classList.remove('evidencia');
            await delay(500);

            if (i + 1 == arr_Memory.length)
                enableScreen();
        }
    }
    loop();

    indice = 0;
}