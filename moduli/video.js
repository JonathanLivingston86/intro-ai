/* Modulo: video a tutto schermo. Parte senza audio quando la slide è attiva, si ferma quando la lasci.
   Audio, pausa e cursore sono nei comandi nativi del video, anche in dispensa. */
(() => {
  'use strict';
  const films = () => [...document.querySelectorAll('video.film')];
  window.DECK_MODULES = window.DECK_MODULES || [];
  window.DECK_MODULES.push({
    init() {
      // i comandi nativi del video gestiscono pausa, cursore e audio: qui si evita solo che il clic cambi slide
      films().forEach(v => v.addEventListener('click', e => e.stopPropagation()));
    },
    enter(slide) {
      films().forEach(v => {
        if (slide.contains(v)) { v.currentTime = 0; v.play().catch(() => {}); }
        else { v.pause(); v.muted = true; }
      });
    },
    handout() { films().forEach(v => v.pause()); }
  });
})();
