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
    if (!row || !C.eras) return;
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
    if (!list || !C.news) return;
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
    if (!list || !C.games) return;
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

  function renderMore() {
    var list = document.getElementById('moreList');
    if (!list || !C.moreGames) return;
    list.innerHTML = '';
    C.moreGames.forEach(function (g) {
      var card = el(g.link ? 'a' : 'article', 'card card--game reveal');
      if (g.link) { card.href = g.link; if (/^https?:/.test(g.link)) { card.target = '_blank'; card.rel = 'noopener'; } }
      card.appendChild(slot(g.image, 'Key art · 16:9', g.title));
      var body = el('div', 'card__body');
      body.innerHTML =
        '<p class="card__meta"><span class="tag">' + esc(t(g.genre)) + '</span><span>' + esc(g.platforms) + '</span></p>' +
        '<h3 class="card__title">' + esc(g.title) + '</h3>' +
        '<p>' + esc(t(g.text)) + '</p>' +
        '<p class="card__status">' + esc(g.status ? t(g.status) : t({ en: 'Play now', pt: 'Joga já' })) + '</p>';
      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function renderReqs() {
    var grid = document.getElementById('reqsGrid');
    if (!grid || !C.requirements) return;
    grid.innerHTML = '';
    C.requirements.forEach(function (r) {
      var card = el('article', 'reqs__card');
      var rows = '';
      r.rows.forEach(function (row) {
        rows += '<dt>' + esc(t(row[0])) + '</dt><dd>' + esc(t(row[1])) + '</dd>';
      });
      card.innerHTML = '<h3>' + esc(t(r.title)) + '</h3><span class="reqs__tag">' + esc(t(r.tag)) + '</span><dl>' + rows + '</dl>';
      grid.appendChild(card);
    });
  }

  var SOCIAL_NAMES = { discord: 'Discord', youtube: 'YouTube', twitch: 'Twitch', x: 'X', instagram: 'Instagram', facebook: 'Facebook', tiktok: 'TikTok' };
  // Simple-icons style glyphs (24x24 viewBox).
  var SOCIAL_ICONS = {
    discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.85a13.8 13.8 0 0 0-.63 1.29 18.4 18.4 0 0 0-5.53 0 13.6 13.6 0 0 0-.64-1.29 19.7 19.7 0 0 0-4.92 1.52C.53 9.05-.32 13.6.1 18.09a19.9 19.9 0 0 0 6.03 3.05 14.7 14.7 0 0 0 1.29-2.1 12.9 12.9 0 0 1-2.03-.97c.17-.13.34-.26.5-.4a14.2 14.2 0 0 0 12.22 0c.16.14.33.27.5.4-.65.38-1.33.71-2.04.98.37.74.8 1.44 1.29 2.1a19.8 19.8 0 0 0 6.04-3.06c.5-5.18-.84-9.69-3.58-13.72M8.02 15.33c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.96 2.42-2.16 2.42m7.97 0c-1.18 0-2.16-1.09-2.16-2.42s.96-2.42 2.16-2.42c1.21 0 2.18 1.1 2.16 2.42 0 1.33-.95 2.42-2.16 2.42"/></svg>'
  };
  function renderSocial() {
    var box = document.getElementById('social');
    if (!box || !C.social) return;
    box.innerHTML = '';
    Object.keys(C.social).forEach(function (k) {
      var url = C.social[k];
      if (!url) return;
      var a = el('a', 'social__link', (SOCIAL_ICONS[k] || '') + '<span>' + esc(SOCIAL_NAMES[k] || k) + '</span>');
      a.setAttribute('aria-label', SOCIAL_NAMES[k] || k);
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
    renderEras(); renderNews(); renderGames(); renderMore(); renderReqs();
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

  /* ---- lightbox: click a picture to see it big (Esc / click / tap closes, arrows browse) ---- */
  function initLightbox() {
    var box = el('div', 'lightbox');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-hidden', 'true');
    var big = el('img', 'lightbox__img');
    var cap = el('p', 'lightbox__cap');
    var close = el('button', 'lightbox__close');
    close.type = 'button';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';
    box.appendChild(big); box.appendChild(cap); box.appendChild(close);
    document.body.appendChild(box);
    var list = [], at = 0;
    function pics() {
      return Array.prototype.slice.call(document.querySelectorAll('.slot img, .zoomable')).filter(function (i) { return !i.closest('a'); });
    }
    function show(i) {
      at = (i + list.length) % list.length;
      big.src = list[at].currentSrc || list[at].src;
      big.alt = list[at].alt || '';
      cap.textContent = list[at].alt || '';
    }
    function open(img) {
      list = pics(); show(Math.max(0, list.indexOf(img)));
      box.classList.add('lightbox--open');
      box.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('no-scroll');
    }
    function hide() {
      box.classList.remove('lightbox--open');
      box.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('no-scroll');
    }
    document.addEventListener('click', function (e) {
      var img = e.target.closest && e.target.closest('.slot img, .zoomable');
      if (img && img.closest('a')) img = null;
      if (img && !box.contains(img)) { e.preventDefault(); open(img); return; }
      if (box.classList.contains('lightbox--open') && (e.target === box || e.target === close || e.target === big)) hide();
    });
    document.addEventListener('keydown', function (e) {
      if (!box.classList.contains('lightbox--open')) return;
      if (e.key === 'Escape') hide();
      else if (e.key === 'ArrowRight') show(at + 1);
      else if (e.key === 'ArrowLeft') show(at - 1);
    });
  }

  /* ---- boot ------------------------------------------------------------- */
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('langBtn').addEventListener('click', function () {
    applyLang(lang === 'pt' ? 'en' : 'pt');
  });
  initSlots();
  initLightbox();
  wireLinks();
  renderSocial();
  initNav();
  var saved = store('hoc-lang');
  applyLang(saved || ((navigator.language || '').toLowerCase().indexOf('pt') === 0 ? 'pt' : 'en'));
})();
