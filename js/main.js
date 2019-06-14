let controlaFS = document.getElementById("btn_full");

controlaFS.addEventListener("click", function() {
  let doc = window.document;
  let docEl = doc.documentElement;
  let requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  let cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
    controlaFS.textContent = "Sair FullScreen"
  }
  else {
    cancelFullScreen.call(doc);
    controlaFS.textContent = "Entrar FullScreen"

  }
}, false);

