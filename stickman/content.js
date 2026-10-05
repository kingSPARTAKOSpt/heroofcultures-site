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
  ]
};
