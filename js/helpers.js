//UTILIZAÇÃO DE PARÂMETROS PRÉ-DEFINIDOS
function getRandomArbitrary(min = 1, max = 4) {
    return Math.trunc(Math.random() * (max - min) + min);
}

function disableScreen() {
    var div= document.createElement("div");
    div.className += "overlay";
    document.body.appendChild(div);
}

function enableScreen() {
    var div = document.querySelector('.overlay');
    div.parentNode.removeChild(div);
}

const delay = (amount = number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, amount);
    });
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }