;(() => {
  function playAudio(code) {
    const playElem = document.querySelector(`audio[data-key="${code}"]`);
    if (!playElem) return;
    playElem.currentTime = 0;
    playElem.play();
  }

  function playEffect(code) {
    const effectElem = document.querySelector(`.playfield[data-key="${code}"]`);
    if (!effectElem) return;
    effectElem.classList.add("play", "shake-hard", "shake-constant")
  }

  function removeEffect(e) {
    if (e.propertyName === 'box-shadow') {
      e.currentTarget.classList.remove("play")
      e.currentTarget.classList.remove("shake-hard")
      e.currentTarget.classList.remove("shake-constant")
    }
  }
  
  window.addEventListener('keydown', (e) => {
    playAudio(e.keyCode);
    playEffect(e.keyCode);
  });

  document.querySelectorAll(`.playfield`).forEach(elem => {
    elem.addEventListener('transitionend', removeEffect);
  });
})();