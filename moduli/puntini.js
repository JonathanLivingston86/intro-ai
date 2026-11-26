/* Modulo: mappa a puntini dell'uso dell'AI nel mondo. 2.500 puntini, uno ogni 3,3 milioni di persone circa.
   Passaggio 0: febbraio 2026. Passaggio 1: novembre 2026. In dispensa resta la vista di novembre. */
(() => {
  'use strict';
  // categorie e conteggi su 2.500 puntini
  const CAT = {
    off: '#8e8e93',   // offline o mai usata
    no: '#e5e5ea',    // online, senza AI generativa
    free: '#30a46c',  // chatbot gratis
    pay: '#f5a623',   // paga un abbonamento
    ag: '#e5484d'     // usa agenti di programmazione
  };
  const FEB = [['off', 675], ['no', 1416], ['free', 400], ['pay', 8], ['ag', 1]];
  const NOV = [['off', 675], ['no', 1100], ['free', 690], ['pay', 25], ['ag', 10]];
  const COLS = 50, N = 2500;

  function seq(list) { const a = []; list.forEach(([k, n]) => { for (let i = 0; i < n; i++) a.push(k); }); return a; }
  const feb = seq(FEB), nov = seq(NOV);

  function build(svg) {
    if (svg.dataset.ready) return;
    const ns = 'http://www.w3.org/2000/svg';
    const size = 10, gap = 2.2, rows = N / COLS;
    svg.setAttribute('viewBox', `0 0 ${COLS * (size + gap)} ${rows * (size + gap)}`);
    for (let i = 0; i < N; i++) {
      const r = document.createElementNS(ns, 'rect');
      const col = i % COLS, row = Math.floor(i / COLS);
      r.setAttribute('x', col * (size + gap));
      r.setAttribute('y', row * (size + gap));
      r.setAttribute('width', size); r.setAttribute('height', size); r.setAttribute('rx', 2.2);
      svg.appendChild(r);
    }
    svg.dataset.ready = '1';
  }

  function paint(svg, which) {
    const list = which === 'feb' ? feb : nov;
    svg.querySelectorAll('rect').forEach((r, i) => { r.style.fill = CAT[list[i]]; });
  }

  function all() { return [...document.querySelectorAll('svg.puntini')]; }

  window.DECK_MODULES = window.DECK_MODULES || [];
  window.DECK_MODULES.push({
    init() { all().forEach(s => { build(s); paint(s, 'feb'); }); },
    enter(slide) { slide.querySelectorAll('svg.puntini').forEach(s => paint(s, 'feb')); },
    step(slide, n) { slide.querySelectorAll('svg.puntini').forEach(s => paint(s, n >= 1 ? 'nov' : 'feb')); },
    handout() { all().forEach(s => paint(s, 'nov')); }
  });
})();
