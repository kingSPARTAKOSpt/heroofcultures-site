/*
 * Target page content (same model as the HoC site: edit THIS file to update the page).
 * Text fields take { en, pt }. Leave a link as '' to hide its button/icon.
 */
window.HOC = {
  links: {
    itch: '',         // https://kingspartakospt.itch.io/target once the itch page is public
    discord: 'https://discord.gg/EJ8BTv39P'
  },
  social: {
    discord: 'https://discord.gg/EJ8BTv39P'
  },

  /* "Eras" row reused as the Early Access road map. */
  eras: [
    { en: 'Battle royale', pt: 'Battle royale',
      d: { en: 'Up to 100 players on dedicated servers, open at scheduled play sessions.', pt: 'Até 100 jogadores em servidores dedicados, abertos em sessões de jogo marcadas.' } },
    { en: 'Melee & more', pt: 'Corpo a corpo',
      d: { en: 'Shields instead of pans, swords instead of crowbars - and vehicles to cross the map.', pt: 'Escudos em vez de panelas, espadas em vez de pés de cabra - e veículos para atravessar o mapa.' } },
    { en: 'Next', pt: 'A seguir',
      d: { en: 'Unreal Engine 5, then Android and consoles. Feedback welcome!', pt: 'Unreal Engine 5, depois Android e consolas. Diz-nos o que achas!' } }
  ],

  moreGames: [
    {
      title: 'Hero of Cultures',
      genre: { en: 'Historical strategy', pt: 'Estratégia histórica' },
      platforms: 'PC · Android soon',
      status: { en: 'Early Access', pt: 'Early Access' },
      text: { en: 'Command armies, shape history - and fight as the hero in third person.', pt: 'Comanda exércitos, muda a história - e luta como o herói na terceira pessoa.' },
      link: '../',
      image: '../img/hero-keyart.webp'
    },
    {
      title: 'Stickman Ultimate',
      genre: { en: 'Fighting', pt: 'Luta' },
      platforms: 'Android · PC',
      status: { en: 'Early Access', pt: 'Early Access' },
      text: { en: 'Fast stickman fighting - online & LAN battles.', pt: 'Luta de stickman rápida - batalhas online e em LAN.' },
      link: '../stickman/',
      image: '../stickman/img/feature.webp'
    }
  ],

  requirements: [
    { title: { en: 'PC - minimum', pt: 'PC - mínimos' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Windows 10/11 64-bit'],
      [{ en: 'Processor', pt: 'Processador' }, { en: '4 cores, 3.0 GHz', pt: '4 núcleos, 3,0 GHz' }],
      [{ en: 'Memory', pt: 'Memória' }, '8 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, 'DirectX 11, GTX 1050 Ti / RX 570'],
      [{ en: 'Network', pt: 'Rede' }, { en: 'Broadband internet', pt: 'Internet de banda larga' }]
    ] },
    { title: { en: 'PC - recommended', pt: 'PC - recomendados' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'Processor', pt: 'Processador' }, { en: '6 cores, 3.5 GHz', pt: '6 núcleos, 3,5 GHz' }],
      [{ en: 'Memory', pt: 'Memória' }, '16 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, 'GTX 1660 / RX 5600 XT or better'],
      [{ en: 'Storage', pt: 'Disco' }, { en: 'SSD', pt: 'SSD' }]
    ] }
  ]
};
