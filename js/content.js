/*
 * HoC site content — edit THIS file to update the site.
 * Everything that changes often lives here: links, downloads, news, eras, games.
 * Text fields take { en, pt }. Leave a link as '' to hide its button/icon.
 */
window.HOC = {

  /* ---- Links ---------------------------------------------------------- */
  links: {
    // Epic Games Store page (works once the product is live on the store).
    epicStore: 'https://store.epicgames.com/p/hoc-be3b3d',
    googlePlay: '',   // Android: coming soon
    itch: ''
  },

  // Social icons in the footer; only the ones with a URL are shown.
  social: {
    discord: '',
    youtube: '',
    twitch: '',
    x: '',
    instagram: '',
    facebook: '',
    tiktok: ''
  },

  /* ---- News (newest first; the home page shows the first 3) ------------ */
  news: [
    {
      date: '2026-10',
      tag: { en: 'Early Access', pt: 'Early Access' },
      title: { en: 'Free to play on the Epic Games Store', pt: 'Grátis na Epic Games Store' },
      text: {
        en: 'Hero of Cultures II enters Early Access on PC through the Epic Games Store — free to play, with a Full Game add-on for unlimited matchmaking, online lobbies and LAN games.',
        pt: 'O Hero of Cultures II entra em Early Access no PC pela Epic Games Store — grátis, com um add-on Full Game para matchmaking ilimitado, lobbies online e jogos em LAN.'
      },
      image: 'img/cover.webp'
    },
    {
      date: '2026-10',
      tag: { en: 'Heroes', pt: 'Heróis' },
      title: { en: 'Heroes on the battlefield', pt: 'Heróis no campo de batalha' },
      text: {
        en: 'Your hero leads from the front: wake them, follow them in line or square, and use their skills to turn the battle.',
        pt: 'O teu herói lidera da frente: acorda-o, segue-o em linha ou em quadrado e usa as suas habilidades para virar a batalha.'
      },
      image: 'img/shots/shot_05.webp'
    },
    {
      date: '2026-09',
      tag: { en: 'Battlefield', pt: 'Campo de batalha' },
      title: { en: 'Fog of war and the 2D map', pt: 'Nevoeiro de guerra e o mapa 2D' },
      text: {
        en: 'Scout to see: forests hide units and the unknown stays dark. Zoom out and the 3D battlefield turns into a painted 2D map.',
        pt: 'Só vês o que exploras: as florestas escondem unidades e o desconhecido fica às escuras. Afasta a câmara e o campo 3D passa a mapa 2D pintado.'
      },
      image: 'img/hero-map.webp'
    }
  ],

  /* ---- Eras (the "Rise through the eras" row) -------------------------- */
  eras: [
    { en: 'Neolithic',        pt: 'Neolítico',         d: { en: 'Tribes, fire, stone tools',       pt: 'Tribos, fogo, ferramentas de pedra' } },
    { en: 'Ancient East',     pt: 'Antiguidade Oriental', d: { en: 'Writing, irrigation, the wheel', pt: 'Escrita, irrigação, a roda' } },
    { en: 'Classical Greece', pt: 'Grécia Clássica',   d: { en: 'Hoplites, phalanx, triremes',     pt: 'Hoplitas, falange, trirremes' } },
    { en: 'Rome',             pt: 'Roma',              d: { en: 'Legions, roads, siege engines',   pt: 'Legiões, estradas, máquinas de cerco' } },
    { en: 'Medieval',         pt: 'Medieval',          d: { en: 'Knights, castles, longbows',      pt: 'Cavaleiros, castelos, arcos longos' } },
    { en: 'Renaissance',      pt: 'Renascimento',      d: { en: 'Pikes, mercenaries, early guns',  pt: 'Piques, mercenários, primeiras armas de fogo' } },
    { en: 'Age of Discovery', pt: 'Descobrimentos',    d: { en: 'Caravels, muskets, cannon',       pt: 'Caravelas, mosquetes, canhões' } },
    { en: 'Industrial',       pt: 'Industrial',        d: { en: 'Rifles, steam, artillery',        pt: 'Espingardas, vapor, artilharia' } }
  ],

  /* ---- Games in the series -------------------------------------------- */
  games: [
    {
      title: 'Hero of Cultures II',
      genre: { en: 'Real-time strategy', pt: 'Estratégia em tempo real' },
      platforms: 'PC · Android (coming soon)',
      status: { en: 'Early Access — free to play', pt: 'Early Access — grátis' },
      text: {
        en: 'The strategy game: heroes, armies and historical battles — on PC now, on mobile soon.',
        pt: 'O jogo de estratégia: heróis, exércitos e batalhas históricas — no PC agora, no telemóvel em breve.'
      },
      link: '#play',
      image: 'img/cover.webp'
    },
    {
      title: 'Hero of Cultures',
      genre: { en: 'Third-person action', pt: 'Ação na terceira pessoa' },
      platforms: 'PC',
      status: { en: 'In development', pt: 'Em desenvolvimento' },
      text: {
        en: 'Walk the battlefield as a single hero.',
        pt: 'Percorre o campo de batalha como um só herói.'
      },
      link: '',
      image: ''
    }
  ]
};
