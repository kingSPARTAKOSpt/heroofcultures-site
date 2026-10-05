/*
 * Stickman Ultimate page content (same model as the HoC site: edit THIS file to update the page).
 * Text fields take { en, pt }. Leave a link as '' to hide its button/icon.
 */
window.HOC = {
  links: {
    googlePlay: '',   // https://play.google.com/store/apps/details?id=com.praelialab.stickman once published
    itch: '',         // https://<user>.itch.io/stickman-ultimate once public
    discord: 'https://discord.gg/EJ8BTv39P'
  },
  social: {
    discord: 'https://discord.gg/EJ8BTv39P'
  },

  /* "Eras" row reused as the Early Access road map. */
  eras: [
    { en: 'Online & LAN', pt: 'Online e LAN',
      d: { en: 'Online matches with players anywhere (PC and Android together) and LAN games that find each other.', pt: 'Partidas online com jogadores de qualquer lado (PC e Android juntos) e jogos em LAN que se encontram sozinhos.' } },
    { en: 'Your stickman', pt: 'O teu stickman',
      d: { en: 'Coming: sliders to shape your fighter, more or less muscle, always a true stickman.', pt: 'A caminho: sliders para moldar o teu lutador, mais ou menos músculo, sempre um verdadeiro stickman.' } },
    { en: 'More to come', pt: 'E mais',
      d: { en: 'More fighters, maps and single-player content during Early Access.', pt: 'Mais lutadores, mapas e conteúdo a solo durante o Early Access.' } }
  ],

  /* Other PraeliaLab games at the bottom. */
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
      title: 'Target',
      genre: { en: 'Battle royale', pt: 'Battle royale' },
      platforms: 'PC',
      status: { en: 'Early Access', pt: 'Early Access' },
      text: { en: '100-player battle royale with shields and swords. Peek in third person and you become the target.', pt: 'Battle royale para 100 jogadores com escudos e espadas. Espreita na terceira pessoa e passas a ser o alvo.' },
      link: '../target/',
      image: '../target/img/keyart.webp'
    }
  ],

  requirements: [
    { title: { en: 'PC - minimum', pt: 'PC - mínimos' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Windows 10/11 64-bit'],
      [{ en: 'Processor', pt: 'Processador' }, { en: '2 cores, 2.0 GHz', pt: '2 núcleos, 2,0 GHz' }],
      [{ en: 'Memory', pt: 'Memória' }, '4 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, { en: 'DirectX 11, integrated graphics', pt: 'DirectX 11, gráfica integrada' }],
      [{ en: 'Storage', pt: 'Disco' }, { en: '2 GB available', pt: '2 GB livres' }]
    ] },
    { title: { en: 'PC - recommended', pt: 'PC - recomendados' }, tag: { en: 'Windows', pt: 'Windows' }, rows: [
      [{ en: 'Processor', pt: 'Processador' }, { en: '4 cores', pt: '4 núcleos' }],
      [{ en: 'Memory', pt: 'Memória' }, '8 GB RAM'],
      [{ en: 'Graphics', pt: 'Gráfica' }, 'GTX 1050 / RX 560 or better']
    ] },
    { title: { en: 'Android', pt: 'Android' }, tag: { en: 'Phones and tablets', pt: 'Telemóveis e tablets' }, rows: [
      [{ en: 'OS', pt: 'Sistema' }, 'Android 9+ (arm64)'],
      [{ en: 'Memory', pt: 'Memória' }, '3 GB RAM'],
      [{ en: 'Tested on', pt: 'Testado em' }, 'Samsung Galaxy A55']
    ] }
  ]
};
