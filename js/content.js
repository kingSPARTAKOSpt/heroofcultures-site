/*
 * HoC site content — edit THIS file to update the site.
 * Everything that changes often lives here: links, downloads, news, eras, games.
 * Text fields take { en, pt }. Leave a link as '' to hide its button/icon.
 */
window.HOC = {

  /* ---- Links ---------------------------------------------------------- */
  links: {
    // TODO: move downloads to itch.io (trustworthy page + PC and Android builds)
    downloadPC: 'https://limewire.com/d/dhKLt#cFShY8rNQY',
    downloadAndroid: 'https://drive.google.com/file/d/1OOxVR3Zq_6-93z-X5R2fIeZbnJfTgMmn/view?usp=drive_web',
    steam: '',
    googlePlay: '',
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
      date: '2026-09',
      tag: { en: 'Multiplayer', pt: 'Multijogador' },
      title: { en: 'Online crossplay in testing', pt: 'Crossplay online em testes' },
      text: {
        en: 'PC and Android players can join the same online match through lobbies with invite codes, teams and ready checks.',
        pt: 'Jogadores de PC e Android entram no mesmo jogo online, com lobbies, códigos de convite, equipas e confirmação de pronto.'
      },
      image: '' // e.g. 'img/news/crossplay.webp'
    },
    {
      date: '2026-09',
      tag: { en: 'Battlefield', pt: 'Campo de batalha' },
      title: { en: 'Fog of war and the 2D map', pt: 'Nevoeiro de guerra e o mapa 2D' },
      text: {
        en: 'Scout to see: forests hide units and the unknown stays dark. Zoom out and the 3D battlefield turns into a painted 2D map.',
        pt: 'Só vês o que exploras: as florestas escondem unidades e o desconhecido fica às escuras. Afasta a câmara e o campo 3D passa a mapa 2D pintado.'
      },
      image: ''
    },
    {
      date: '2026-09',
      tag: { en: 'Game mode', pt: 'Modo de jogo' },
      title: { en: 'Deploy mode in development', pt: 'Modo Deploy em desenvolvimento' },
      text: {
        en: 'Place up to 100 units in 10 groups before the fight begins — then let steel decide.',
        pt: 'Coloca até 100 unidades em 10 grupos antes da batalha começar — depois o aço decide.'
      },
      image: ''
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
      platforms: 'PC · Android',
      status: { en: 'Pre-alpha — play free', pt: 'Pré-alfa — joga grátis' },
      text: {
        en: 'The strategy game: armies, eras and crossplay battles on PC and mobile.',
        pt: 'O jogo de estratégia: exércitos, eras e batalhas em crossplay no PC e no telemóvel.'
      },
      link: '#play',
      image: '' // e.g. 'img/games/hoc2.webp'
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
