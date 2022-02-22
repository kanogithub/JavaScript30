;(function() {
  const hHour = document.querySelector("div.hand.hour");
  const hMinute = document.querySelector("div.hand.minute");
  const hSecond = document.querySelector("div.hand.second");
  
  const setClock = function() {
    const _secondDeg = new Date().getSeconds() * 6;
    const _minuteDeg = new Date().getMinutes() * 6 + new Date().getSeconds() * 6 / 60;
    const _hourDeg = new Date().getHours() * 30 + new Date().getMinutes() * 30 / 60;
    hSecond.style.transform = `rotate(${_secondDeg}deg)`;
    hMinute.style.transform = `rotate(${_minuteDeg}deg)`;
    hHour.style.transform = `rotate(${_hourDeg}deg)`;
  }

  // initialize
  setClock();

  /*  actions  */
  // use setInterval
  // setInterval(setClock , 1000);

  // use animationFrame
  function animationHandler() {
    setClock();
    window.requestAnimationFrame(animationHandler);
  }

  window.requestAnimationFrame(animationHandler);
})();