(function () {
  'use strict';

  var C = window.HOC;
  var PT = window.HOC_PT || {};
  var lang = 'en';

  /* ---- helpers ---------------------------------------------------------- */
  function t(field) {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    return field[lang] || field.en || '';
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function fmtDate(ym) {
    var p = String(ym).split('-');
    var d = new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1);
    try {
      return d.toLocaleDateString(lang === 'pt' ? 'pt-PT' : 'en-GB', p[2] ? { day: 'numeric', month: 'short', year: 'numeric' } : { month: 'long', year: 'numeric' });
    } catch (e) { return ym; }
  }
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  /* ---- media slots: placeholder until an <img>/<video> is put inside ---- */
  function initSlots() {
    document.querySelectorAll('.slot').forEach(function (s) {
      if (s.querySelector('img, video, iframe')) return;
      s.classList.add('slot--empty');
      s.appendChild(el('span', 'slot__label', esc(s.getAttribute('data-slot') || 'Image / video')));
    });
  }
  function slot(src, label, alt) {
    var f = el('figure', 'slot');
    if (src) {
      var img = el('img');
      img.src = src; img.alt = alt || ''; img.loading = 'lazy';
      f.appendChild(img);
    } else {
      f.classList.add('slot--empty');
      f.appendChild(el('span', 'slot__label', esc(label)));
    }
    return f;
  }

  /* ---- dynamic sections from content.js --------------------------------- */
  var ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

  function renderEras() {
    var row = document.getElementById('erasRow');
    row.innerHTML = '';
    C.eras.forEach(function (era, i) {
      var li = el('li', 'era');
      li.innerHTML =
        '<span class="era__num">' + (ROMAN[i] || i + 1) + '</span>' +
        '<h3 class="era__name">' + esc(t(era)) + '</h3>' +
        '<p class="era__desc">' + esc(t(era.d)) + '</p>';
      row.appendChild(li);
    });
  }

  function renderNews() {
    var list = document.getElementById('newsList');
    list.innerHTML = '';
    C.news.slice(0, 3).forEach(function (n) {
      var card = el('article', 'card reveal');
      card.appendChild(slot(n.image, 'News image · 16:9', t(n.title)));
      var body = el('div', 'card__body');
      body.innerHTML =
        '<p class="card__meta"><span class="tag">' + esc(t(n.tag)) + '</span><time datetime="' + esc(n.date) + '">' + esc(fmtDate(n.date)) + '</time></p>' +
        '<h3 class="card__title">' + esc(t(n.title)) + '</h3>' +
        '<p>' + esc(t(n.text)) + '</p>';
      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function renderGames() {
    var list = document.getElementById('gamesList');
    list.innerHTML = '';
    C.games.forEach(function (g) {
      var card = el(g.link ? 'a' : 'article', 'card card--game reveal');
      if (g.link) card.href = g.link;
      card.appendChild(slot(g.image, 'Key art · 16:9', g.title));
      var body = el('div', 'card__body');
      body.innerHTML =
        '<p class="card__meta"><span class="tag">' + esc(t(g.genre)) + '</span><span>' + esc(g.platforms) + '</span></p>' +
        '<h3 class="card__title">' + esc(g.title) + '</h3>' +
        '<p>' + esc(t(g.text)) + '</p>' +
        '<p class="card__status">' + esc(t(g.status)) + '</p>';
      card.appendChild(body);
      list.appendChild(card);
    });
  }

  var SOCIAL_NAMES = { discord: 'Discord', youtube: 'YouTube', twitch: 'Twitch', x: 'X', instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' };
  function renderSocial() {
    var box = document.getElementById('social');
    box.innerHTML = '';
    Object.keys(C.social).forEach(function (k) {
      var url = C.social[k];
      if (!url) return;
      var a = el('a', 'social__link', esc(SOCIAL_NAMES[k] || k));
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
      box.appendChild(a);
    });
    box.hidden = !box.children.length;
  }

  function wireLinks() {
    document.querySelectorAll('[data-link]').forEach(function (a) {
      var url = C.links[a.getAttribute('data-link')];
      if (!url) { a.hidden = true; return; }
      a.href = url; a.target = '_blank'; a.rel = 'noopener';
    });
  }

  /* ---- language --------------------------------------------------------- */
  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(function (e) {
      if (e.dataset.en == null) e.dataset.en = e.innerHTML;
      var k = e.getAttribute('data-i18n');
      e.innerHTML = (l === 'pt' && PT[k]) ? PT[k] : e.dataset.en;
    });
    var btn = document.getElementById('langBtn');
    btn.textContent = l === 'pt' ? 'EN' : 'PT';
    btn.setAttribute('aria-label', l === 'pt' ? 'Switch to English' : 'Mudar para português');
    renderEras(); renderNews(); renderGames();
    observeReveals();
    store('hoc-lang', l);
  }

  /* ---- nav -------------------------------------------------------------- */
  function initNav() {
    var nav = document.getElementById('nav');
    var burger = document.getElementById('burger');
    var onScroll = function () { nav.classList.toggle('nav--solid', window.scrollY > 40); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('nav--open');
      burger.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('#navLinks a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('nav--open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- reveal on scroll ------------------------------------------------- */
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 }) : null;
  function observeReveals() {
    document.querySelectorAll('.reveal:not(.is-in)').forEach(function (e) {
      if (io) io.observe(e); else e.classList.add('is-in');
    });
  }

  /* ---- boot ------------------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('langBtn').addEventListener('click', function () {
    applyLang(lang === 'pt' ? 'en' : 'pt');
  });
  initSlots();
  wireLinks();
  renderSocial();
  initNav();
  var saved = store('hoc-lang');
  applyLang(saved || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en'));
})();
